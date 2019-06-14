// HTTP GET
export const _get = (url, dispatch, type) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: type,
        payload: data
      });
    })
    .catch(err => console.error(err));
};

// HTTP POST
export const _post = (url, dispatch, type, postData) => {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: type,
        payload: data
      });
    })
    .catch(err => console.error(err));
};

// HTTP PUT
export const _put = (url, dispatch, type, updatedData) => {
  fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
  })
    .then(response => response.json())
    .then(data => {
      return dispatch({
        type: type,
        payload: data
      });
    })
    .catch(err => console.error(err));
};

// HTTP DELETE
export const _delete = (url, dispatch, type) => {
  fetch(url, { method: 'DELETE' })
    .then(response => response.text())
    .then(data => {
      return dispatch({
        type: type,
        payload: data
      });
    })
    .catch(err => console.error(err));
};
