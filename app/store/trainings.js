/**
[{
  id: string, uniq ID
  date: string, 日付
  menus: [{ 実行したメニュー　ex 腹筋
    name: string,　メニュー名
    count: number, 回数
    minute: number, 時間
    weight: number, 負荷
    comment: string, 補足
  }],
  UserId: string, 実行したユーザー
  weight: number, トレーニング後のユーザーの体重
  calorie: number, 消費カロリー
  fat: number, トレーニング後のユーザーの体脂肪率
  isDone: boolean, 完了フラグ
  comment: string, 補足
}]
 */

 export const state = () => ([]);

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
  trainingById: (state) => (id) => {
    return state.find((u) => {
      return u.id === id;
    });
  }
}
  