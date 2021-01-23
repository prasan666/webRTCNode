turnConfig = {
    iceServers: [{
        urls: ["stun:bn-turn1.xirsys.com"]
    }, {
        username: "Ecbdb8nGAv9gHVuJKZocRuHZTQsMluZPjOAdMtx7ptibjM-EGQB22N64KM3glsWlAAAAAGALw6lwcmFzYW5uYQ==",
        credential: "2acd9c22-5d45-11eb-b760-0242ac140004",
        urls: ["turn:bn-turn1.xirsys.com:80?transport=udp", "turn:bn-turn1.xirsys.com:3478?transport=udp", "turn:bn-turn1.xirsys.com:80?transport=tcp", "turn:bn-turn1.xirsys.com:3478?transport=tcp", "turns:bn-turn1.xirsys.com:443?transport=tcp", "turns:bn-turn1.xirsys.com:5349?transport=tcp"]
    }]
}