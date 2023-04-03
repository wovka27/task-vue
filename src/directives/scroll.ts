import type {Directive} from "vue";
import App from "@/App.vue";
const checkNameBrowser = (name: string) => navigator.userAgent.toLocaleLowerCase().match(name)
const directive: Directive = {
    mounted(el: HTMLElement & {savedScrollLeft: number; savedPageX: number | null}) {
        el.style.cursor = "grab";
        const eventName: string = checkNameBrowser('firefox') ? 'DOMMouseScroll' : 'mousewheel'

        const noneEvent = (flag: unknown) => {
            Array.from(el.children).forEach((item: any) => {
                if (flag) {
                    item.style.pointerEvents = "none";
                } else {
                    item.style.pointerEvents = "auto";
                }
            });
        }
        const mousewheel = (event: WheelEvent & {wheelDelta: number}) => {
            event.preventDefault();
            if (el.savedPageX) return
            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || event.detail)))
            el.scrollLeft -= delta * 100;
            el.savedScrollLeft = el.scrollLeft;
        }

        const mousedown = (event: MouseEvent) => {
            event.preventDefault();
            el.savedPageX = event.pageX;
            el.savedScrollLeft = el.scrollLeft;
        }

        const mouseup = () => {
            el.savedPageX = null;
            el.style.cursor = "grab";
            noneEvent(false)
        }

        const mouseleave = () => {
            el.savedPageX = null;
            el.style.cursor = "grab";
        }

        const mousemove =  (event: MouseEvent) => {
            if (!el.savedPageX) {
                return;
            }
            noneEvent(el.savedPageX)
            el.scrollLeft = el.savedScrollLeft + el.savedPageX - event.pageX;
            el.style.cursor = "grabbing";
        }

        const events: Parameters<
            (
                type: keyof DocumentEventMap | string,
                listener: EventListenerOrEventListenerObject,
                options?: (boolean | AddEventListenerOptions)
            ) => void
        >[] = [
            [eventName, mousewheel as EventListenerOrEventListenerObject],
            ["mousedown", mousedown],
            ["mouseup", mouseup],
            ["mouseleave", mouseleave],
            ["mousemove", mousemove]
        ];

        for (const event of events) {
            el.addEventListener(...event);
        }
    },
}

export const grabScrollDirective:Parameters<App<Element>['directive']> = ['grabScroll', directive]