<template>
  <edit-slot :id="getSlotId('content')"/>
</template>

<script>
// @flow
import BaseElement from "components/Builder/BaseElement";
import EditSlot from "components/Builder/EditSlot";
import Base from "./Base";

export default {
  components: {
    EditSlot
  },
  extends: BaseElement,
  mixins: [Base]
};
</script>
