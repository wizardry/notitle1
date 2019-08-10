/**
  id: string, uniq ID
  name: string, 氏名
  age: number, 年齢
  gender: number,enum,　性別
  weight: number, 体重
  height: number,　身長
  fat: number, 体脂肪率
  comment: string,

 */

export const state = () => ({
  users: [],
})
  
export const mutations = {

  regist (state, value) {
    const id = state.users.length;
    const user = {
      id: id,
      ...value,
    }
    state.users = [
      ...state.users,
      user,
    ];
    console.log('user.regist', state)
  },

  eidt (state, value) {
    const target = state.users.find((u) => u.id === value.id);
    target = value;
  }
}

export const getters = {
  userById: (state) => (id) => {
    return state.users.find((u) => u.id === id);
  }
}
  