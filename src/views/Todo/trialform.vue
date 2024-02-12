<template>
    <div class="flex justify-center h-screen w-screen bg-gray-800 p-20 text-blue-100">
        <div
            class="border-2 w-1/3 rounded-xl border-blue-900 shadow-sm shadow-blue-500 text-wrap p-6 flex flex-col space-y-2">
            <input type="text" class="inputBox" placeholder="Enter Name Here...">
            <input type="password" class="inputBox" placeholder="Password" name="" id="">
            <div class="flex justify-evenly text-xl">
                <span><input type="checkbox" name="chkBox" id="cbk1"><label for="cbk1">Code</label></span>
                <span><input type="checkbox" name="chkBox" id="cbk2"><label for="cbk2">And</label></span>
                <span><input type="checkbox" name="chkBox" id="cbk3"><label for="cbk3">Learn</label></span>
            </div>
            <div class="flex justify-around text-xl">
                <span><input type="radio" name="gender" value="Male" id="male" checked><label for="male">Male</label></span>
                <span><input type="radio" name="gender" value="Female" id="female"><label for="Female">Female</label></span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.inputBox {
    @apply bg-gray-500 w-full rounded-md py-2 focus:ring-4 focus:shadow-md focus:shadow-black focus:ring-blue-800 text-3xl px-2;
}
</style>