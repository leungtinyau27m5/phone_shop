import { ADD_FILTER, REMOVE_FILTER } from '../actions/shopppingMall'

const initialState = {
    filterList: {
        checkItem: [{
            value: 'brand',
            text: 'Brand',
            subList: [{
                value: 'acer',
                text: 'Acer'
            }, {
                value: 'asus',
                text: 'Asus'
            }, {
                value: 'apple',
                text: 'Apple'
            }, {
                value: 'lg',
                text: 'LG'
            }, {
                value: 'samsung',
                text: 'Samsung'
            }]
        }, {
            value: 'network',
            text: 'Network',
            subList: [{
                value: '3g',
                text: '3G',
            }, {
                value: '4g',
                text: '4G'
            }, {
                value: '5g',
                text: '5G'
            }]
        }, {
            value: 'audio',
            text: 'Audio',
            subList: [{
                value: 'jack',
                text: '3.5mm JACK'
            }, {
                value: 'dualSpeaker',
                text: 'Dual Speaker'
            }]
        }, {
            value: 'connectivity',
            text: 'Connectivity',
            subList: [{
                value: 'wifi',
                text: 'WLAN (Wi-Fi)'
            }, {
                value: 'bluetooth',
                text: 'BlueTooth'
            }, {
                value: 'gps',
                text: 'GPS'
            }, {
                value: 'nfc',
                text: 'nfc'
            }, {
                value: 'typeC',
                text: 'USB Type C'
            }, {
                value: 'wirelessCharge',
                text: 'wireles Charging'
            }]
        }, {
            value: 'simCard',
            text: 'Dual Sim Slot',
        }, {
            value: 'memeroyCard',
            text: 'Memoery Card Slot'
        }],
        scaleItem: [{
            value: 'hieght',
            text: 'Hieght',
            min: 90,
            max: 160,
            step: 10,
            unit: 'mm'
        }, {
            value: 'width',
            text: 'Width',
            min: 40,
            max: 80,
            step: 5,
            unit: 'mm'
        }, {
            value: 'thickness',
            text: 'Thickness',
            min: 5,
            max: 20,
            step: 2,
            unit: 'mm'
        }, {
            value: 'weight',
            text: 'Weight',
            min: 60,
            max: 230,
            step: 20,
            unit: 'g'
        }, {
            value: 'ram',
            text: 'RAM',
            min: 1,
            max: 10,
            step: 1,
            unit: 'GB'
        }, {
            value: 'price',
            text: 'Price',
            min: 1000,
            max: 10000,
            step: 1000,
            unit: '$'
        }],
        specialItem: [{
            value: 'storage',
            text: 'Storaget - Rom',
            subList: [
                '4BG',
                '8BG',
                '16GB',
                '32GB',
                '64GB',
                '128GB',
                '256GB',
                '512GB',
            ]
        }, {
            value: 'resolution',
            text: 'Resolution',
            subList: [
                '240x320 (QVGA)',
                '240x400 (WQVGA)',
                '320x480 (HVGA)',
                '480x800 (WVGA)',
                '540x960 (qHD)',
                '720x1280 (HD)',
                '1080x1920 (FHD)',
                '1440x2560 (QHD)',
                '1644x3840 (4K)'
            ],
        }]
    },
    appliedFilters: []
}

const shoppingMall = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTER:
            let index = null
            index = state.appliedFilters.findIndex(item => item.filterValue === action.filterValue)
            if (index !== -1) {
                return ({
                    ...state,
                    appliedFilters: [
                        ...state.appliedFilters.slice(0, index),
                        ...state.appliedFilters.slice(index + 1),
                        {
                            filterType: action.filterType,
                            filterValue: action.filterValue,
                            currentValue: action.filterCurrentValue
                        }
                    ]
                })
            } else {
                return ({
                    ...state,
                    appliedFilters: [
                        ...state.appliedFilters,
                        {
                            filterType: action.filterType,
                            filterValue: action.filterValue,
                            currentValue: action.filterCurrentValue
                        }
                    ]
                })
            }
        case REMOVE_FILTER:
            let idx = -1
            idx = state.appliedFilters.findIndex(item => item.filterValue === action.filterValue)
            console.log(state.appliedFilters)
            console.log(action.filterValue)
            console.log(action.filterType)
            console.log('remove filter item ' + idx)
            if (idx === -1) return state
            return (
                {
                    ...state,
                    appliedFilters: [
                        ...state.appliedFilters.slice(0, idx),
                        ...state.appliedFilters.slice(idx + 1)
                    ]
                }
            )
        default: return state
    }
}

export default shoppingMall