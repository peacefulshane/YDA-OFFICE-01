var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.00038432460000237256,
          "pitch": 0,
          "rotation": 0,
          "target": "1-entrance-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance-lobby",
      "name": "ENTRANCE LOBBY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.552281828678538,
          "pitch": 0.07100271111104917,
          "rotation": 0,
          "target": "2-walk-way-tunnel"
        },
        {
          "yaw": -2.7550363391386554,
          "pitch": 0.01147463974489149,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-walk-way-tunnel",
      "name": "WALK WAY TUNNEL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05837648790005012,
          "pitch": 0,
          "rotation": 0,
          "target": "7-open-discussion-area-"
        },
        {
          "yaw": 3.0067405869150043,
          "pitch": 0.2306069594288882,
          "rotation": 0,
          "target": "1-entrance-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-material-display",
      "name": "MATERIAL DISPLAY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.21862123607627204,
        "pitch": -0.0362699562453912,
        "fov": 1.2579409239652903
      },
      "linkHotspots": [
        {
          "yaw": -0.578584354050216,
          "pitch": 0.0065587161771958336,
          "rotation": 0,
          "target": "8-marketing-room"
        },
        {
          "yaw": -1.0216156711634277,
          "pitch": 0.05094049613655649,
          "rotation": 4.71238898038469,
          "target": "4-meeting-room"
        },
        {
          "yaw": 1.7613116192713019,
          "pitch": 0.02830475730918458,
          "rotation": 0,
          "target": "6-designer-area"
        },
        {
          "yaw": -2.31667243626978,
          "pitch": 0.010024972956125922,
          "rotation": 4.71238898038469,
          "target": "2-walk-way-tunnel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-meeting-room",
      "name": "MEETING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.310205174786301,
          "pitch": 0.060877224749978254,
          "rotation": 0,
          "target": "3-material-display"
        },
        {
          "yaw": -2.559347470934064,
          "pitch": 0.04692158162726301,
          "rotation": 0,
          "target": "5-pantry-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pantry-area",
      "name": "PANTRY AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4980646640801023,
          "pitch": -0.004857707853910043,
          "rotation": 10.995574287564278,
          "target": "2-walk-way-tunnel"
        },
        {
          "yaw": -2.1256075193038413,
          "pitch": 0.06025771059783125,
          "rotation": 0,
          "target": "3-material-display"
        },
        {
          "yaw": -2.9384388461622706,
          "pitch": -0.030966926833043473,
          "rotation": 5.497787143782138,
          "target": "8-marketing-room"
        },
        {
          "yaw": -0.771463995033864,
          "pitch": 0.005351711259718783,
          "rotation": 0,
          "target": "6-designer-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-designer-area",
      "name": "DESIGNER AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9378176913271297,
          "pitch": 0.15366121050766246,
          "rotation": 0,
          "target": "7-open-discussion-area-"
        },
        {
          "yaw": -1.1503539936205804,
          "pitch": 0.06799380786384468,
          "rotation": 0,
          "target": "3-material-display"
        },
        {
          "yaw": -1.5928105167491893,
          "pitch": -0.022614082507683264,
          "rotation": 0,
          "target": "4-meeting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-open-discussion-area-",
      "name": "OPEN DISCUSSION AREA ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.40615317732513745,
          "pitch": 0.014809752187224134,
          "rotation": 4.71238898038469,
          "target": "4-meeting-room"
        },
        {
          "yaw": 0.6799945695879259,
          "pitch": 0.014090545701602508,
          "rotation": 7.0685834705770345,
          "target": "8-marketing-room"
        },
        {
          "yaw": -0.5210486469047311,
          "pitch": 0.12343844082547406,
          "rotation": 0,
          "target": "5-pantry-area"
        },
        {
          "yaw": -1.376421839231046,
          "pitch": 0.016394387860538373,
          "rotation": 0,
          "target": "1-entrance-lobby"
        },
        {
          "yaw": -0.25350344906061295,
          "pitch": -0.08378385630952323,
          "rotation": 10.995574287564278,
          "target": "2-walk-way-tunnel"
        },
        {
          "yaw": 0.6916200226132627,
          "pitch": 0.20022432529955125,
          "rotation": 13.351768777756625,
          "target": "3-material-display"
        },
        {
          "yaw": 2.624762680357204,
          "pitch": 0.09080920096181266,
          "rotation": 0,
          "target": "6-designer-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-marketing-room",
      "name": "MARKETING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.321191053025065,
          "pitch": 0.09648674855378836,
          "rotation": 0,
          "target": "3-material-display"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-overall-view",
      "name": "OVERALL VIEW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.48869219055841384,
        "pitch": 0.0037097611384062645,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.6948564726166957,
          "pitch": -0.03057453500892393,
          "rotation": 4.71238898038469,
          "target": "2-walk-way-tunnel"
        },
        {
          "yaw": -0.0037600559634629604,
          "pitch": 0.09207926520454102,
          "rotation": 0,
          "target": "5-pantry-area"
        },
        {
          "yaw": -1.7529009935694155,
          "pitch": 0.05116903121381711,
          "rotation": 4.71238898038469,
          "target": "6-designer-area"
        },
        {
          "yaw": 2.6235978496367354,
          "pitch": 0.07304616256520191,
          "rotation": 0,
          "target": "3-material-display"
        },
        {
          "yaw": 2.122623012770326,
          "pitch": 0.030900815576003993,
          "rotation": 0,
          "target": "8-marketing-room"
        },
        {
          "yaw": -0.5383330598179796,
          "pitch": 0.00839423407381723,
          "rotation": 7.0685834705770345,
          "target": "1-entrance-lobby"
        },
        {
          "yaw": 1.639658544755866,
          "pitch": 0.04265156275756077,
          "rotation": 4.71238898038469,
          "target": "4-meeting-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "YDA OFFICE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
