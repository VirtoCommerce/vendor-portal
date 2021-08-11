/**
 * Blade Header component.
 * @author Iurii A Taranov <me@flanker72.ru>
 */
import { Story } from "@storybook/vue3";
import VcBladeHeader from "./vc-blade-header.vue";

export default {
  title: "molecules/vc-blade-header",
  component: VcBladeHeader,
};

const Template: Story = (args) => ({
  components: { VcBladeHeader },
  setup() {
    return { args };
  },
  template: '<vc-blade-header v-bind="args"></vc-blade-header>',
});

export const BladeHeader = Template.bind({});
BladeHeader.storyName = "vc-blade-header";
BladeHeader.args = {
  expanded: false,
  closable: false,
  title: "Catalog",
  subtitle: "Manage your product catalog",
  icon: "folder",
};