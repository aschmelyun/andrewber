import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

const getUserLocation = async () => {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej)
    })
}

export const useLocationStore = defineStore('location', () => {
    const destination = reactive({
        name: '',
        address: '',
        geometry: {
            lat: null,
            lng: null
        }
    })

    const current = reactive({
        geometry: {
            lat: null,
            lng: null
        }
    })

    const updateCurrentLocation = async () => {
        const userLocation = await getUserLocation()
        current.geometry = {
            lat: userLocation.coords.latitude,
            lng: userLocation.coords.longitude
        }
    }

    const reset = () => {
        destination.name = ''
        destination.address = ''
        destination.geometry.lat = null
        destination.geometry.lng = null

        current.geometry.lat = null
        current.geometry.lng = null
    }
    
    return { destination, current, updateCurrentLocation, reset }
})
