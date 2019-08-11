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

export const state = () => ([])
  
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
  