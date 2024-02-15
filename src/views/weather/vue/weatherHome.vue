<template>
    <div v-if="loading" class="loading-screen">
        <p>Loading...</p>
    </div>
    <div class="w-screen bg-gradient-to-br  from-slate-950 box-border h-screen text-slate-50 font-serif" :class="toColor"
        v-else>
        <nav
            class="w-screen bg-slate-900/30 flex fixed shadow-lg border-y rounded-b-2xl border-blue-50/50 shadow-gray-500/30 py-2  text-blue-300 group overflow-hidden ">

            <span
                class=" before:block px-3 before:absolute before:-inset-6 before:-rotate-[10deg] before:-skew-y-12 before:bg-slate-200/10 relative inline-block ">
                <span
                    class=" before:block px-3 before:absolute before:-inset-12 before:-skew-y-12 before:-rotate-[12deg] before:bg-slate-200/10 relative inline-block ">
                    <h1
                        class="text-3xl relative underline decoration-2  decoration-blue-500 underline-offset-4 tracking-wider italic first-letter:text-5xl text-blue-200 capitalize first-letter:text-blue-500">
                        sky cast <p :class="{ 'animate-spin': Contloading }"
                            class="material-symbols-outlined bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 via-yellow-400 to-orange-800">
                            clear_day</p>
                    </h1>
                </span>
            </span>
            <input type="search" id="search" v-model="place" placeholder="search" class="clicked"
                :class="{ 'material-symbols-outlined': showIcon, 'input-loading': Contloading }" @focus="showIcon = false"
                @keyup.enter="displayRes()" @blur="showIcon = true, clear()" />
        </nav>
        <div class="py-9">
        </div>
        <div class="flex flex-col p-4 h-4/5 justify-between">
            <div class="flex py-10 px-24 justify-between ">

                <div class="flex gap-5">
                    <div class="flex flex-col space-y-4 w-72" :class="{ 'content-loading': Contloading }">
                        <h2 class="text-5xl font-serif font-thin">{{ cityName.location.name }},</h2>
                        <h2 class="text-2xl font-serif">{{ cityName.location.region }}, {{ cityName.location.country }}</h2>
                        <h2 class="text-2xl font-serif">(Lat: {{ cityName.location.lat }}, Lon: {{ cityName.location.lon }})
                        </h2>
                    </div>
                    <div class="w-24" :class="{ 'content-loading': Contloading }">
                        <img v-if="cityName.current.condition.icon" :src="cityName.current.condition.icon" width="100px"
                            height="100px" srcset="">
                        <h1 class="text-3xl text-center">{{
                            cityName.current.condition.text }}</h1>
                    </div>
                </div>

                <div class="flex flex-col w-72 space-y-4 text-right py-4" :class="{ 'content-loading': Contloading }">
                    <div class="text-4xl">
                        Wind:<h2 class="inline "> {{ cityName.current.wind_kph
                        }} km/h</h2>
                    </div>
                    <div>
                        <h1 class="text-2xl">Time-zone: <h2 class="inline w-28" :class="{ 'content-loading': Contloading }">
                                {{
                                    cityName.location.tz_id
                                }}</h2>
                        </h1>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <span class="w-1/3 h-16 flex justify-center my-6 gap-9 " :class="{ 'content-loading': Contloading }">
                    <label class="relative inline-flex items-center cursor-pointer " :class="{ 'hidden': Contloading }">
                        <input v-model="tempCF" class="sr-only peer" value="" type="checkbox">
                        <div
                            class="peer text-3xl text-white rounded-br-2xl rounded-tl-2xl outline-none duration-100 after:duration-500 w-28 h-14 bg-blue-600/20   after:content-['C'] after:absolute after:outline-none after:rounded-br-xl after:rounded-tl-xl after:h-12 after:w-12 after:bg-gray-400 after:top-1 after:left-1 after:flex after:justify-center after:items-center after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['F'] peer-checked:after:border-white">
                        </div>
                    </label>

                    <h1 class="text-5xl" v-if="tempCF">Temp: {{ cityName.current.temp_f }} °F</h1>
                    <h1 class="text-5xl" v-else>Temp: {{ cityName.current.temp_c }} °C</h1>
                    <h1 class="w-32 text-center">Humidity: <h1 class="w-9 inline">{{
                        cityName.current.humidity }}
                        </h1>
                    </h1>
                </span>
            </div>
            <div class="px-24 text-3xl">
                <div :class="{ 'content-loading': Contloading }" class="h-28 flex justify-evenly">
                    <div v-for="date in cityName.forecast.forecastday" :key="date"
                        class="border border-white py-1 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-b from-blue-700/40 px-2 flex justify-center">
                        <img :src="date.day.condition.icon" width="100px" height="100px" srcset="">
                        <h1 class="text-xl flex flex-col justify-center">{{ date.date }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';




const loading = ref(true);
const Contloading = ref(false);
const tempCF = ref(false);

onBeforeMount(() => {
    loading.value = true;
});

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 100);//increase for loading
});
var cityName = ref()

function contentLoading() {
    cityName.value = {
        location: {
            name: ""
        },
        current: {
            condition: {
                icon: ""
            }
        },
        forecast: {
            forecastday: ""
        }
    }
}

contentLoading()

const showIcon = ref(true)
const place = ref("New Delhi")
const clear = () => {
    place.value = "";
};

var toColor = ref("")

function chngBg(colorTemp) {
    console.log(toColor.value, colorTemp)
    if (colorTemp <= 18) {
        toColor.value = " to-blue-600 "
    } else if (colorTemp > 18.1) {
        toColor.value = "to-yellow-600"
    } else {
        toColor.value = "slate-950"
    }
    console.log(toColor.value, colorTemp)
}


const displayRes = () => {
    console.log(place.value)
    Contloading.value = true;
    if (place.value == "") {
        place.value = "New Delhi"
    }
    contentLoading()
    setTimeout(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=49b232b7ff3548ed925101245241002&q=${place.value.trim()}&days=7&aqi=no&alerts=no`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON from the response
            })
            .then(data => {
                console.log(place.value)
                cityName.value = data
                showIcon.value = true
                clear()
                console.log(cityName.value);
                Contloading.value = false;
                chngBg(cityName.value.current.temp_c)
                document.activeElement.blur();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                alert("Please check the connection and entered City!")
                document.activeElement.blur();
                place.value = "New Delhi"
                displayRes()
            });
    }, 2000);

}

// const key = "49b232b7ff3548ed925101245241002"
// BaseUrl =
// https://api.weatherapi.com/v1/current.json?key=49b232b7ff3548ed925101245241002&q=lan,lon/city-name
// https://api.weatherapi.com/v1/forecast.json?key=49b232b7ff3548ed925101245241002&q=21.77,72.15&days=7

displayRes()
console.log(tempCF.value)
</script>

<style scoped>
.clicked {
    @apply focus:w-64 group-hover:w-64 focus:ml-[32%] group-hover:ml-[32%] ml-[38%] focus:px-4 placeholder:focus:visible mr-6 rounded-full w-12 h-12 bg-gray-600/50 after:hover:content-none text-white transition-all duration-500 group-hover:bg-gray-300/50 group-hover:ring-2 placeholder:p-2 group-hover:ring-inset
}

.loading-screen {
    @apply animate-pulse flex justify-center items-center h-screen text-3xl before:content-['.']
}

.input-loading {
    @apply animate-pulse bg-gray-500 text-transparent
}

.content-loading {
    @apply animate-pulse bg-gray-500 rounded-md text-transparent
}
</style>
