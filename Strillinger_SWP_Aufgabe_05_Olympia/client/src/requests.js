import axios from "axios";

export const Services = {
  medals_table: "medals",
  medals_plotly: "medals2",
  event_table: "events",
  event_by_noc_table: "event_by_noc",
  regions_table: "regions",
  count_by_sex_table: "count_by_sex",
  count_by_sex_plotly: "count_by_sex2",
};

export async function api_request(service) {
  try {
    const response = await axios.get(`http://localhost:5000/${service}`, {
      service,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function api_request_parameter(service, q) {
  try {
    const response = await axios.get(`http://localhost:5000/${service}/${q}`, {
      service,
      q,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
