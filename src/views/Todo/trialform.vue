<template>
    <form @submit.prevent="submitForm" action="">
        <div class="flex justify-center h-screen w-screen bg-gray-800 p-20 text-blue-100">
            <div
                class="border-2 w-1/3 rounded-xl border-blue-900 shadow-sm shadow-blue-500 text-wrap p-6 flex flex-col space-y-2">
                <input type="text" v-model="state.name" class="inputBox" placeholder="Enter Name Here...">
                <span v-for="error in v$.name.$errors" :key="error.$uid">{{ error.$message }}</span>
                <input type="password" @blur="v$.pass.$touch()" v-model="state.pass" class="inputBox" placeholder="Password"
                    name="" id="">
                <span v-for="error in v$.pass.$errors" :key="error.$uid">{{ error.$message }}</span>
                <div class="flex justify-evenly text-3xl ">
                    <span class="p-2"><input type="checkbox" class="" name="chkBox" id="cbk1"><label for="cbk1">
                            Code</label></span>
                    <span class="p-2"><input type="checkbox" name="chkBox" id="cbk2"><label for="cbk2"> And</label></span>
                    <span class="p-2"><input type="checkbox" name="chkBox" id="cbk3"><label for="cbk3"> Learn</label></span>
                </div>

                <div class="flex justify-around text-xl">
                    <span><input type="radio" name="gender" value="Male" id="male" checked><label for="male">
                            Male</label></span>
                    <span><input type="radio" name="gender" value="Female" id="female"><label for="Female">
                            Female</label></span>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="w-1/2 p-2 text-white bg-black rounded-lg">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, alpha } from '@vuelidate/validators';

const state = reactive({
    name: "",
    pass: ""
});

const rules = {
    name: { required },
    pass: { required, alpha }
};

const v$ = useVuelidate(rules, state);
const submitForm = async () => {
    const result = await v$.value.$validate();
    if (result) {
        alert("Success");
    } else {
        alert("Form not Submitted");
    }
}
</script>


<style scoped>
.inputBox {
    @apply bg-gray-500 w-full rounded-md py-2 focus:ring-4 focus:shadow-md focus:shadow-black focus:ring-blue-800 text-3xl px-2;
}
</style>