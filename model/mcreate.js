const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  id: {
        type: String,
        required: true
    },
    market_id: {
        type: String,
        required: true,
        unique:true
    },
    name:{
        type:String,
        default:null
    },
    team1:  {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    status:{
      type: String,
      default: "inactive"
    },
    match_type: {
        type: String,
        required: true
    },
    insert_type: {
        type: String,
        required: true
    },
    date_time:{
        type: String,
        required:true
    },
    totalclientplay:{
        type: Number,
        default:0
    },
    matchbets:{
        type: Number,
        default:0
    },
    sessionbets:{
      type: Number,
      default:0  
    },
    bothoddstatus:{
        type: Boolean,
        default:1
    },
    matchoddstatus:{
        type: Boolean,
        default:1
    },
    khai:{
        type: Number,
        default:0  
    },
    lagai:{
        type: Number,
        default:0  
    },
    range:{
        type: Number,
        default:0  
    },
    score_id:{
        type: Number,
        default: null
    },
    won_by:{},
    odds_type:{},
    bet_delay_time:{type: Number},
    fav_team:{type: String},
    maximum_match_amount:{type: Number},
    minimum_match_amount:{type: Number},
    maximum_session_amount:{type: Number},
    minimum_session_amount:{type: Number},
    funting_status:{},
    fancy_running_type:{type:String},
    score_hit_method:{type: String},
    client_api_hit:{},
    tv_type:{},
    socket:{},
    match_bet_status:{},
    session_bet_status:{},
    notification:{},
});
matchSchema.set('timestamps', true);
module.exports = mongoose.model('mcreate',matchSchema);