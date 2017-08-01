import {List} from 'immutable'

export const OPTIONS = List.of(1, 2, 3, 5, 8, 13, 21)

const SERVER_OPTIONS = {
    network: 'http://192.168.1.89:8027',
    ef_network: 'http://10.24.204.177:8027/',    
    local: 'http://localhost:8027',
    remote: 'https://ephtimate.herokuapp.com/:8027',
    ec2: 'http://35.176.197.70:8027'
}

export const SERVER = SERVER_OPTIONS.ec2
