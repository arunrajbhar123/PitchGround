const axios = require("axios");

test("test endpoint", async () => {
  axios.post("http://localhost:8000/todo-item/list").then((res) => {
    expect(res?.data).toBeDefined();
  });
});

test("paginate check", async () => {
  axios
    .post("http://localhost:8000/todo-item/list", {
      pageNumber: 1,
    })
    .then((res) => {
      expect(res?.data?.data.length).toEqual(5);
    });
});



test("get done item", async () => {
    axios
      .post("http://localhost:8000/todo-item/list/status-done", {
        pageNumber: 1,
        status: false,
      })
      .then((res) => {
        expect(res?.data?.data[0]?.status).toStrictEqual(false);
      });
  });
