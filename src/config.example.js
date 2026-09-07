module.exports = {
  mqtt: {
    host: 'baa08601d2eb4d6b905b289ef2a9ef2e.s1.eu.hivemq.cloud',
    port: 8883,
    user: 'esp32_home',
    password: 'eski yil bilan'
  },
  devices: [
    {
      name: 'Xona chirog\'i',
      room: 'AkalarPC',
      type: 'devices.types.light',
      mqtt: {
        set: 'home/relay1/set',
        stat: 'home/relay1/state'
      }
    },
    {
      name: 'Oshxona chirog\'i',
      room: 'AkalarPC',
      type: 'devices.types.light',
      mqtt: {
        set: 'home/relay2/set',
        stat: 'home/relay2/state'
      }
    },
    {
      name: 'Konditsioner',
      room: 'AkalarPC',
      type: 'devices.types.socket',
      mqtt: {
        set: 'home/relay3/set',
        stat: 'home/relay3/state'
      }
    },
    {
      name: 'Suv isitgich',
      room: 'AkalarPC',
      type: 'devices.types.socket',
      mqtt: {
        set: 'home/relay4/set',
        stat: 'home/relay4/state'
      }
    }
  ]
}
