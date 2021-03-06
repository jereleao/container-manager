import { http } from '../http'

const create = (data) => {
  return http.post('/containers', data);
};

const get = (id) => {
  return http.get(`/containers/${id}`);
};

const index = (client, type, status, category) => {
  return http.get(
    `/containers` //?client=${client || ""}&type=${type || ""}&status=${status || ""}&category=${category || ""}
  );
};

const update = (id, data) => {
  return http.put(`/containers/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/containers/${id}`);
};

export const containersService = {
  create,
  get,
  index,
  update,
  remove,
};

