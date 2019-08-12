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

const dummyUser = {
  id: '0',
  name: 'user1',
  age: 31,
  gender: 0,
  weight: 58.8,
  height: 163,
  fat: 20.8,
  comment: 'init user.'
}

export const state = () => ([ dummyUser ])
  
export const mutations = {

  regist (state, value) {
    const id = state.length;
    const user = {
      id: id.toString(),
      ...value,
    }
    state.push(user);
  },

  edit (state, value) {
    const targetIndex = state.findIndex((u) => u.id === value.id);
    state.splice(targetIndex, 1, value);
  }
}

export const getters = {
  userById: (state) => (id) => {
    return state.find((u) => {
      return u.id === id;
    });
  }
}
  