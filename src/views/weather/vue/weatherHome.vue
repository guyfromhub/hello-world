<template>
    <div v-if="loading" class="loading-screen">
        <p>Loading...</p>
    </div>
    <div class="w-screen bg-slate-950 box-border h-screen text-slate-50 font-serif " v-else>
        <nav
            class="w-screen bg-slate-900/80 flex fixed shadow-lg border-y rounded-b-2xl border-blue-950 shadow-gray-500/30 py-2  text-blue-300 group overflow-hidden ">

            <span
                class=" before:block px-3 before:absolute before:-inset-6 before:-rotate-[10deg] before:-skew-y-12 before:bg-slate-200/10 relative inline-block ">
                <span
                    class=" before:block px-3 before:absolute before:-inset-12 before:-skew-y-12 before:-rotate-[12deg] before:bg-slate-200/10 relative inline-block ">
                    <h1
                        class="text-3xl relative underline decoration-2 decoration-blue-500 underline-offset-4 tracking-wider italic first-letter:text-5xl text-blue-200 capitalize first-letter:text-blue-500">
                        sky cast <p
                            class="material-symbols-outlined bg-clip-text text-transparent animate-spin bg-gradient-to-b from-yellow-400 via-yellow-400 to-orange-800">
                            clear_day</p>
                    </h1>
                </span></span>
            <input type="search" id="search" v-model="place" placeholder="search" class="clicked"
                :class="{ 'material-symbols-outlined': showIcon }" @focus="showIcon = false" @keyup.enter="displayRes()"
                @blur="showIcon = true, clear()" />
        </nav>
        <div class="py-9">
        </div>
        <div class="flex py-10 px-24 justify-between">
            <div class="flex gap-5">
                <div class="flex flex-col space-y-4">
                    <h2 class="text-5xl font-serif font-thin">{{ cityName.location.name }},</h2>
                    <h2 class="text-2xl font-serif">{{ cityName.location.region }}, {{ cityName.location.country }}</h2>
                    <h2 class="text-2xl font-serif">(Lat: {{ cityName.location.lat }}, Lon: {{ cityName.location.lon }})
                    </h2>
                </div>
                <div class="items-center ">
                    <img v-if="cityName.current.condition.icon" :src="cityName.current.condition.icon" width="100px"
                        height="100px" srcset="">
                    <h1 class="text-3xl text-center">{{ cityName.current.condition.text }}</h1>
                </div>
            </div>

            <div class="flex flex-col ">
                <div class="text-4xl">
                    Wind:{{ cityName.current.wind_kph }} km/h
                </div>
                <div>
                    <h1 class="text-2xl">Time-zone: {{ cityName.location.tz_id }}</h1>
                </div>
            </div>
        </div>
        <div class="flex justify-center ">
            <h1>Humidity: {{ cityName.current.humidity }}</h1>
        </div>
        <div class="px-24 text-3xl flex justify-evenly">
            <div v-for="date in cityName.forecast.forecastday" :key="date" class=" flex justify-center">
                <img :src="date.day.condition.icon" width="100px" height="100px" srcset="">
                <h1 class="text-xl flex flex-col justify-center">{{ date.date }}</h1>
            </div>
        </div>

    </div>
</template>


<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';

const loading = ref(true);

onBeforeMount(() => {
    loading.value = true;
});

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 10);//increase for loading
});

var cityName = ref({
    location: {
        name: ""
    },
    current: {
        condition: {
            icon: ""
        }
    },
    "forecast": {
        "forecastday": ""
    }
})

const showIcon = ref(true)
const place = ref("New Delhi")
const clear = () => {
    place.value = "";
};


const displayRes = () => {
    if (place.value == "") {
        place.value = "New Delhi"
    }
    setTimeout(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=49b232b7ff3548ed925101245241002&q=${place.value.trim()}&days=7&aqi=no&alerts=no`)

            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON from the response
            })
            .then(data => {
                cityName.value = data
                showIcon.value = true
                clear()
                console.log(cityName.value);
                document.activeElement.blur();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                alert("Please check the connection and entered City!")
                document.activeElement.blur();
            });
    }, 300);
}

// const key = "49b232b7ff3548ed925101245241002"
// BaseUrl =
// https://api.weatherapi.com/v1/current.json?key=49b232b7ff3548ed925101245241002&q=lan,lon/city-name
// https://api.weatherapi.com/v1/forecast.json?key=49b232b7ff3548ed925101245241002&q=21.77,72.15&days=7

displayRes()

</script>

<style scoped>
.clicked {
    @apply focus:w-64 group-hover:w-64 focus:ml-[32%] group-hover:ml-[32%] px-0 ml-[38%] focus:px-4 placeholder:focus:visible mr-6 rounded-full w-12 h-12 bg-gray-600/50 after:hover:content-none placeholder:text-white transition-all duration-500 group-hover:bg-gray-300/50 group-hover:ring-2 placeholder:p-2 group-hover:ring-inset
}

.loading-screen {
    @apply animate-pulse flex justify-center items-center h-screen text-3xl
}

.content-loading {
    @apply max-w-sm animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4
}
</style>
