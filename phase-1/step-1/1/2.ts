interface Draggable_Interface {
    drag() : void;
}

interface Resizeable_Interface {
    resize() : void;
}

type UI_Widget_Type = Draggable_Interface & Resizeable_Interface;

const ui_widget : UI_Widget_Type = {
    drag() { console.log('dragging....') },
    resize() { console.log('resizing....') },
};

ui_widget.drag();
ui_widget.resize();