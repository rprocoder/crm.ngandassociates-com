const storeToken = (value) => {
  if (value) {
    // console.log("Store Token")
    const { access, refresh } = value
    localStorage.setItem('access_token', access)
    localStorage.setItem('refresh_token', refresh)
  }
}


const storeToken1 = (value) => {
  if (value) {
    // console.log("Store Token")
    const { access, refresh } = value
    localStorage.setItem('access_token1', access)
    localStorage.setItem('refresh_token1', refresh)
  }
}

const storeToken2 = (value) => {
  if (value) {
    // console.log("Store Token")
    const { access, refresh } = value
    localStorage.setItem('access_token2', access)
    localStorage.setItem('refresh_token2', refresh)
  }
}

const storeToken3 = (value) => {
  if (value) {
    // console.log("Store Token")
    const { access, refresh } = value
    localStorage.setItem('access_token3', access)
    localStorage.setItem('refresh_token3', refresh)
  }
}




const getToken = () => {
  let access_token = localStorage.getItem('access_token')
  let refresh_token = localStorage.getItem('refresh_token')
  return { access_token, refresh_token }
}


const getToken1 = () => {
  let access_token1 = localStorage.getItem('access_token1')
  let refresh_token1 = localStorage.getItem('refresh_token1')
  return { access_token1, refresh_token1 }
}


const getToken2 = () => {
  let access_token2 = localStorage.getItem('access_token2')
  let refresh_token2 = localStorage.getItem('refresh_token2')
  return { access_token2, refresh_token2 }
}



const getToken3 = () => {
  let access_token3 = localStorage.getItem('access_token3')
  let refresh_token3 = localStorage.getItem('refresh_token3')
  return { access_token3, refresh_token3 }
}




const removeToken = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

const removeToken1 = () => {
  localStorage.removeItem('access_token1')
  localStorage.removeItem('refresh_token1')
}
const removeToken2 = () => {
  localStorage.removeItem('access_token2')
  localStorage.removeItem('refresh_token2')
}
const removeToken3 = () => {
  localStorage.removeItem('access_token3')
  localStorage.removeItem('refresh_token3')
}



export { storeToken, getToken, removeToken, storeToken1, storeToken2,storeToken3,getToken1,getToken2,getToken3,removeToken1,removeToken2,removeToken3}