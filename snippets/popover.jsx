import { Action, NavigationView, Page, Popover, Button, TextView, contentView, device } from 'tabris';

contentView.append(
  <Button left={16} right={16} top={24} onSelect={showPopover}>Show Popover</Button>
);

const IMG_CLOSE = device.platform === 'iOS' ? 'resources/close-black-24dp@3x.png' : 'resources/close-white-24dp@3x.png';
const closeAction = onSelect => <Action title='Close' image={IMG_CLOSE} onSelect={onSelect}/>;
const button = contentView.find().first(Button);

function showPopover() {
  const popover = Popover.open(
    <Popover width={300} height={400} anchor={button}>
      <NavigationView stretch navigationAction={closeAction(() => popover.close())}>
        <Page title='Popover'>
          <TextView layoutData='center'>Hello Popover</TextView>
        </Page>
      </NavigationView>
    </Popover>
  );
}
