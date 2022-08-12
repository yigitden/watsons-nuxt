<template>
  <div>
    <FormTitle title="Shopping details" :icon="['fas', 'inbox']" />

    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <Input type="text" id="firstName" labelText="First Name *" />
      <Input type="text" id="lastName" labelText="Last Name *" />
      <Input type="email" id="email" labelText="Email Address *" />
      <Input
        type="text"
        id="phone"
        labelText="Phone number *"
        placeholder="+90 ( 5_ _ ) _ _ _  _ _  _ _"
        pattern="^(((\+|00)?(90)|0)[-| ]?)?((5\d{2})[-| ]?(\d{3})[-| ]?(\d{2})[-| ]?(\d{2}))$"
      />

      <div>
        <label
          for="cities"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >City *</label
        >
        <select
          id="cities"
          v-model="form.city"
          @change="selectCity"
          class="border border-smoke text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected disabled>Please Select</option>
          <option
            v-for="item in city"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </select>
      </div>
      <div>
        <label
          for="district"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >District *</label
        >
        <select
          v-model="form.district"
          :disabled="disabled"
          id="district"
          class="border border-smoke text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected disabled>Please Select</option>
          <option
            v-for="item in district"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            {{ item.value }}
          </option>
        </select>
      </div>
    </div>

    <div class="mb-6">
      <TextArea
        labelText="Address *"
        id="address"
        rows="4"
        placeholder="Enter neighborhood, street, avenue and other information"
      />
    </div>
  </div>
</template>

<script>
import Input from "../Input/index.vue";
import TextArea from "../TextArea/index.vue";
import FormTitle from "./FormTitle.vue";
export default {
  components: { Input, TextArea, FormTitle },
  data() {
    return {
      disabled: "disabled",
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        district: "",
        address: "",
      },
      city: [
        {
          value: "Istanbul",
          label: "Istanbul",
        },
        {
          value: "Ankara",
          label: "Ankara",
        },
        {
          value: "Izmir",
          label: "Izmir",
        },
      ],
      district: [],
    };
  },
  methods: {
    selectCity() {
      if (this.form.city === "Istanbul") {
        this.form.district = "";
        this.district = [];
        this.disabled = false;
        this.district.push({
          value: "Bakırkoy",
          label: "Bakırkoy",
        });
      }
      if (this.form.city === "Ankara") {
        this.form.district = "";
        this.district = [];
        this.disabled = false;
        this.district.push({
          value: "Kızılay",
          label: "Kızılay",
        });
      }
      if (this.form.city === "Izmir") {
        this.form.district = "";
        this.district = [];
        this.disabled = false;
        this.district.push({
          value: "Foça",
          label: "Foça",
        });
      }
    },
  },
};
</script>

<style></style>
