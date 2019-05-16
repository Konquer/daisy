import { MouseEvents, MouseDownEventArgs, MouseUpEventArgs, MouseMovedEventArgs } from '../events/MouseEvents'

export default class EventListener {

    public static listen() {

        document.onmousedown = this.onMouseDown.bind(this)
        document.onmouseup = this.onMouseUp.bind(this)
        document.onmousemove = this.onMouseMoved.bind(this)

    }

    private static onMouseDown(event: MouseEvent) {
        MouseEvents.dispatch(new MouseDownEventArgs(event.x, event.y))
    }

    private static onMouseUp(event: MouseEvent) {
        MouseEvents.dispatch(new MouseUpEventArgs(event.x, event.y))
    }

    private static onMouseMoved(event: MouseEvent) {
        MouseEvents.dispatch(new MouseMovedEventArgs(event.x, event.y))
    }

}