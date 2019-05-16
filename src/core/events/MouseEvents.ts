import { EventDispatcher, IEvent } from 'strongly-typed-events'

export class MouseEvents {

    private static _mouseMovedEvent = new EventDispatcher<MouseEvents, MouseMovedEventArgs>()

    public static get onMouseMoved(): IEvent<MouseEvents, MouseMovedEventArgs> {
        return this._mouseMovedEvent.asEvent()
    }

    public static dispatch<T>(eventArgs: T) {

        if(eventArgs instanceof MouseMovedEventArgs)
            this._mouseMovedEvent.dispatch(this, eventArgs)

    }



}

export class MouseMovedEventArgs {

    constructor(private _x: number, private _y: number) {}

    public get x(): number {
        return this._x
    }

    public get y(): number {
        return this._y
    }

}

export class MouseDownEventArgs {

    constructor(private _x: number, private _y: number) {}

    public get x(): number {
        return this._x
    }

    public get y(): number {
        return this._y
    }

}

export class MouseUpEventArgs {

    constructor(private _x: number, private _y: number) {}

    public get x(): number {
        return this._x
    }

    public get y(): number {
        return this._y
    }

}