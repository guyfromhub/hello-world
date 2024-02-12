<template>
    <div class="h-screen w-screen bg-slate-700 flex justify-center items-center">
        <div
            class="flex flex-col w-1/2 h-2/3 relative overflow-x-hidden overflow-y-auto justify-center items-center border rounded-md shadow-lg shadow-yellow-50 border-blue-50 p-9">
            <div class="flex items-center absolute w-full justify-center p-4 bg-zinc-500/45 top-0 ">
                <input type="text" v-model="name" class="text-4xl rounded-lg px-2 py-1" name="enterValue" id=""
                    placeholder="Enter Your Task...">

                <button @click="insrtVal()"
                    class="text-white mx-3 transition-all duration-400 rounded-md bg-gray-800 hover:bg-gray-700 focus:bg-gray-600 border border-slate-50 p-2">Insert</button>

            </div>

            <div div class="  space-y-2 m-4 w-full">
                <div v-for="  task   in   todoList  " class="todolistdiv flex min-w-0 " :key="task.id">
                    <div class="text-4xl h-auto w-1/2 max-w-1/2 text-wrap ">{{
                        task.todo }}
                    </div>
                    <p class="text-[9px] ml-auto ">{{ task.timeStamp }}</p>
                    <button class="material-symbols-outlined order-last" @click="removeValue(task.id)">delete</button>
                </div>
            </div>
            <!--  -->
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'


const timeStamp = ref(new Date());
const name = ref('')
const rules = computed(() => ({


    name: {
        required,
    },
}))

const v$ = useVuelidate(rules, { name })


const todoList = ref([{
    "id": 0,
    "todo": "A",
    "timeStamp": "Mon Feb 05 2024 20:29:17 GMT+0530 (India Standard Time)"
}, {
    "id": 1,
    "todo": "B",
    "timeStamp": "Mon Feb 05 2024 20:29:17 GMT+0530 (India Standard Time)"
}, {
    "id": 2,
    "todo": "C",
    "timeStamp": "Mon Feb 05 2024 20:29:17 GMT+0530 (India Standard Time)"
}])

function removeValue(deleteId) {
    const deleteInd = todoList.value.findIndex(element => element.id == deleteId)
    todoList.value.splice(deleteInd, 1)
}

function insrtVal() {
    v$.value.name.$touch()
    if (v$.value.name.$invalid) {
        console.log('invalid code');
        return false
    }
    else {
        todoList.value.push({ "id": todoList.value.length + 1, "todo": name.value, "timeStamp": timeStamp.value })
        console.log(todoList.value.length)
    }
}

</script>


<style scoped>
.todolistdiv {
    @apply w-full rounded-lg bg-slate-800 odd:text-white even:bg-slate-100 px-2 py-1;
}
</style>