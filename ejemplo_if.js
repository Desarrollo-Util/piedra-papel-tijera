console.clear()
const Game_Const = ['STONE', 'PAPER', 'SCISSORS']

const Rules = (Player_1, Player_2) => {
    if (Player_1 === Game_Const[0] && Player_2 === Game_Const[2]) return true
    if (Player_1 === Game_Const[1] && Player_2 === Game_Const[0]) return true
    if (Player_1 === Game_Const[2] && Player_2 === Game_Const[1]) return true
    return false
}

const Game = (Player_1, Player_2) => {
    if (!Game_Const.includes(Player_1) || !Game_Const.includes(Player_2)) throw new Error('none listed element')
    if (Player_1 === Player_2) return ('Draw')
    if (Rules(Player_1, Player_2)) return ('Player 1 Win')
    return ('Player 2 Win')
}

console.log(Game(Game_Const[2], Game_Const[1]))