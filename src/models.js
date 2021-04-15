export const counter = {
  state: {
    count: 0,
    activity: {
      name: "",
      link: "",
      type: ""
    },
    loading: false
  },
  reducers: {
    onActivitySuccess: (state, data) => {
      return {
        ...state,
        count: state.count + 1,
        activity: {
          name: data.activity,
          link: data.link,
          type: data.type
        },
        loading: false
      };
    },
    onLoading: (state) => {
      return {
        ...state,
        loading: true
      };
    }
  },
  effects: (dispatch) => ({
    async asyncIncrement() {
      this.onLoading();

      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      const res = await fetch(
        "https://www.boredapi.com/api/activity"
      ).then((response) => response.text());

      const activity = JSON.parse(res);
      console.log("BUTTON CLICKED", activity);

      this.onActivitySuccess(activity);
    }
  })
};
