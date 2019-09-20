<template>
  <div class="designer">
    <xform-designer :value="fields" @input="update" ref="designer">
      <!-- slot-->
    </xform-designer>
    <modal title="field json value" :show.sync="show">
      <textarea :value="json" class="example-value" rows="45" readonly/>
    </modal>
  </div>
</template>

<script>
import localData from '../mixin/localData';

export default {
  name: 'designer',
  inject: ['fieldKey'],
  mixins: [localData],
  data(){
    return {
      show: false,
      fields: this.getLocalFields()
    }
  },
  computed: {
    json(){
      return JSON.stringify(this.fields, null ,'  ');
    }
  },
  methods: {
    update(value){
      this.fields = value;

      // 本地存储
      this.saveFieldsToLocal(this.fieldKey, value)
    },
    submit(){
      this.show = true;
    }
  }
}
</script>