import {CheckBox, Color, CheckBoxSelectEvent, CheckBoxCheckedChangedEvent} from 'tabris';

let widget: CheckBox = new CheckBox();

// Properties
let checked: boolean;
let text: string;
let color: Color;

checked = widget.checked;
text = widget.text;
color = widget.textColor;
color = widget.tintColor;
color = widget.checkedTintColor;

widget.checked = checked;
widget.text = text;
widget.textColor = color;
widget.tintColor = color;
widget.checkedTintColor = color;

// Events
let target: CheckBox = widget;
let timeStamp: number = 0;
let type: string = 'foo';
let value: boolean = true;

let checkedChangedEvent: CheckBoxCheckedChangedEvent = {target, timeStamp, type, value};
let checkBoxSelectEvent: CheckBoxSelectEvent = {target, timeStamp, type, checked};

widget.on({
  checkedChanged: (event: CheckBoxCheckedChangedEvent) => {},
  select: (event: CheckBoxSelectEvent) => {}
});
