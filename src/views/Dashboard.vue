<script setup lang="ts">
import Count from '@/components/widgets/Count.vue'
import CalculateAttribute from '@/components/widgets/CalculateAttribute.vue'
import ClassStyle from '@/components/widgets/ClassStyle.vue'
import ConditionalRendering from '@/components/widgets/ConditionalRendering.vue'
import ListRendering from '@/components/widgets/ListRendering.vue'
import Event from '@/components/widgets/Event.vue'
import Watch from '@/components/widgets/Watch.vue'
import TemplateReference from '@/components/widgets/TemplateReference.vue'
import ComponentLayout from '@/components/widgets/ComponentLayout.vue'
import DynamicComponent from '@/components/widgets/DynamicComponent.vue'
import DefineModel from '@/components/widgets/DefineModel.vue'
import SlotLayout from '@/components/widgets/SlotLayout.vue'
import DependencyInjection from '@/components/widgets/DependencyInjection.vue'
import Composables from '@/components/widgets/Composables.vue'
import CustomDirective from '@/components/widgets/CustomDirective.vue'
</script>

<template>
  <main>
    <h2>Dashboard</h2>
    <a-row :gutter="16">
      <a-col :span="6">
        <Count></Count>
      </a-col>
      <a-col :span="6">
        <CalculateAttribute></CalculateAttribute>
      </a-col>
      <a-col :span="6">
        <ClassStyle></ClassStyle>
      </a-col>
      <a-col :span="6">
        <ConditionalRendering></ConditionalRendering>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="6">
        <ListRendering></ListRendering>
      </a-col>
      <a-col :span="6">
        <Event></Event>
      </a-col>
      <a-col :span="6">
        <Watch></Watch>
      </a-col>
      <a-col :span="6">
        <TemplateReference></TemplateReference>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="6">
        <ComponentLayout></ComponentLayout>
      </a-col>
      <a-col :span="6">
        <DynamicComponent></DynamicComponent>
      </a-col>
      <a-col :span="6">
        <DefineModel></DefineModel>
      </a-col>
      <a-col :span="6">
        <SlotLayout></SlotLayout>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="6">
        <DependencyInjection></DependencyInjection>
      </a-col>
      <a-col :span="6">
        <Composables></Composables>
      </a-col>
      <a-col :span="6">
        <CustomDirective></CustomDirective>
      </a-col>
      <a-col :span="6">
      </a-col>
    </a-row>

  </main>
</template>

<style scoped>
main {
  padding: 10px;
}

</style>