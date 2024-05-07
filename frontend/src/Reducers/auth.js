const authReducer = (state={data:null}, actions) =>{
    switch (actions.type) {
        case "AUTH":
            localStorage.setItem('Profile',JSON.stringify({...actions?.data}))
            return {...state, data: actions?.data}
        case 'UPDATE_PREMIUM':
                return { ...state };
        case "FETCH_PROFILE":
            return { ...state, profile: actions.payload };
    
        default:
            return state;
    }
}

export default authReducer