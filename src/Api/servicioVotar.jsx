import { API_HOST } from "../../utils/constants";
import { METHOD } from "./sendApiRequest";
import { sendApiRequest } from "./sendApiRequest";

export const servicioVotar = async (id) => {
    return sendApiRequest (METHOD.PUT, API_HOST + `/entradas/votar/${id}`);
};
