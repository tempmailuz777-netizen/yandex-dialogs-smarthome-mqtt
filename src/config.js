module.exports = {
  mqtt: {
    host: 'baa08601d2eb4d6b905b289ef2a9ef2e.s1.eu.hivemq.cloud',
    port: 8883,
    user: 'esp32_home',
    password: 'eski yil bilan'
  },
  devices: [
    {
      name: 'RGB lampa',
      room: 'Xona',
      type: 'devices.types.light',
      mqtt: {
        set: 'home/lamp/power/set',
        stat: 'home/lamp/power/state',
        rgb: {
          set: 'home/lamp/rgb/set',
          stat: 'home/lamp/rgb/state'
        }
      },
      capabilities: [
        {
          type: 'devices.capabilities.on_off',
          retrievable: true,
          state: { instance: 'on', value: false }
        },
        {
          type: 'devices.capabilities.color_setting',
          retrievable: true,
          parameters: { color_model: 'rgb' },
          state: { instance: 'rgb', value: 16777215 }
        }
      ]
    },
    {
      name: 'Oshxona chirog\'i',
      room: 'Oshxona',
      type: 'devices.types.light',
      mqtt: {
        set: 'home/relay2/set',
        stat: 'home/relay2/state'
      }
    },
    {
      name: 'Konditsioner',
      room: 'Xona',
      type: 'devices.types.socket',
      mqtt: {
        set: 'home/relay3/set',
        stat: 'home/relay3/state'
      }
    },
    {
      name: 'Suv isitgich',
      room: 'Hammom',
      type: 'devices.types.socket',
      mqtt: {
        set: 'home/relay4/set',
        stat: 'home/relay4/state'
      }
    }
  ]
}
