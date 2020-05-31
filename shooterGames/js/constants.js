const WIDTH = 640;
const HEIGHT = 480;

const PLAYER_ACC = 300;
const PLAYER_SPEED_MAX = 150;
const PLAYER_FRICTION_RATE = 0.9;
const PLAYER_CONSTRAIN_HMIN = 0;
const PLAYER_CONSTRAIN_HMAX = WIDTH;
const PLAYER_CONSTRAIN_VMIN = HEIGHT * 0.5;
const PLAYER_CONSTRAIN_VMAX = HEIGHT;
const PLAYER_BULLET_WAITTIME = 100;
const PLAYER_HEALTH_MAX = 1;

const BULLET_SPEED_VECTOR = {x: 0, y: -500};

const ENEMY_HEALTH_MAX = 1;
const ENEMY_BODY_POWER = 1;
const ENEMY_SPEED_NORMAL = 100;

const ENEMY_BEHAVIOUR_FORTH_BACK = [
    {time: 0, action: 'move', args: {x: 0, y: ENEMY_SPEED_NORMAL}},
    {time: 1000, action: 'move', args: {x: 0, y: 0}},
    {time: 1500, action: 'launch', args: null},
    {time: 2500, action: 'move', args: {x: 0, y: -ENEMY_SPEED_NORMAL}},
];
const ENEMY_BEHAVIOUR_STRAIGHT_DOWN = [
    {time: 0, action: 'move', args: {x: 0, y: ENEMY_SPEED_NORMAL}},
    {time: 200, action: 'launch', args: null},
    {time: 1300, action: 'launch', args: null},
    {time: 2400, action: 'launch', args: null},
    {time: 3500, action: 'launch', args: null},
    {time: 4600, action: 'launch', args: null},
];
const ENEMY_BEHAVIOUR_RIGHT_DOWN = [
    {time: 0, action: 'move', args: {x: ENEMY_SPEED_NORMAL/Math.sqrt(2), y: ENEMY_SPEED_NORMAL/Math.sqrt(2)}},
    {time: 1500, action: 'move', args: {x: 2*ENEMY_SPEED_NORMAL/Math.sqrt(5), y: ENEMY_SPEED_NORMAL/Math.sqrt(5)}},
    {time: 3000, action: 'move', args: {x: 4*ENEMY_SPEED_NORMAL/Math.sqrt(17), y: ENEMY_SPEED_NORMAL/Math.sqrt(17)}},
    {time: 3500, action: 'launch', args: null},
];
const ENEMY_BEHAVIOUR_LEFT_DOWN = [
    {time: 0, action: 'move', args: {x: -ENEMY_SPEED_NORMAL/Math.sqrt(2), y: ENEMY_SPEED_NORMAL/Math.sqrt(2)}},
    {time: 1500, action: 'move', args: {x: -2*ENEMY_SPEED_NORMAL/Math.sqrt(5), y: ENEMY_SPEED_NORMAL/Math.sqrt(5)}},
    {time: 3000, action: 'move', args: {x: -4*ENEMY_SPEED_NORMAL/Math.sqrt(17), y: ENEMY_SPEED_NORMAL/Math.sqrt(17)}},
    {time: 3500, action: 'launch', args: null},
];
const ENEMY_SPAWN_SCHEDULE = [
    {
        time: 500,
        type: 'pawn',
        args: {
            x: WIDTH * 0.5,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_FORTH_BACK,
        },
    },
    {
        time: 750,
        type: 'pawn',
        args: {
            x: WIDTH * 0.25,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_FORTH_BACK,
        }
    },
    {
        time: 750,
        type: 'pawn',
        args: {
            x: WIDTH * 0.75,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_FORTH_BACK,
        }
    },
    {
        time: 5000,
        type: 'knight',
        args: {
            x: WIDTH * 0.25,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_STRAIGHT_DOWN,
        }
    },
    {
        time: 5000,
        type: 'knight',
        args: {
            x: WIDTH * 0.75,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_STRAIGHT_DOWN,
        }
    },
    {
        time: 10000,
        type: 'bishop',
        args: {
            x: 0,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_RIGHT_DOWN,
        }
    },
    {
        time: 11000,
        type: 'bishop',
        args: {
            x: 0,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_RIGHT_DOWN,
        }
    },
    {
        time: 12000,
        type: 'bishop',
        args: {
            x: 0,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_RIGHT_DOWN,
        }
    },
    {
        time: 13000,
        type: 'bishop',
        args: {
            x: 0,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_RIGHT_DOWN,
        }
    },
    {
        time: 14000,
        type: 'bishop',
        args: {
            x: 0,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_RIGHT_DOWN,
        }
    },
    {
        time: 15000,
        type: 'bishop',
        args: {
            x: WIDTH,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_LEFT_DOWN,
        }
    },
    {
        time: 16000,
        type: 'bishop',
        args: {
            x: WIDTH,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_LEFT_DOWN,
        }
    },
    {
        time: 17000,
        type: 'bishop',
        args: {
            x: WIDTH,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_LEFT_DOWN,
        }
    },
    {
        time: 18000,
        type: 'bishop',
        args: {
            x: WIDTH,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_LEFT_DOWN,
        }
    },
    {
        time: 19000,
        type: 'bishop',
        args: {
            x: WIDTH,
            y: 0,
            behaviours: ENEMY_BEHAVIOUR_LEFT_DOWN,
        }
    }
];
Object.freeze(ENEMY_SPAWN_SCHEDULE);