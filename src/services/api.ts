import axios from "axios";

export const createUser = async (
  firstName: string,
  lastName: string,
  gender: string,
  address: string,
  birthDate: string
) => {
  try {
    await axios.post("https://crud-app-ts.adaptable.app/users/new", {
      firstName,
      lastName,
      gender,
      address,
      birthDate,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await axios.delete("https://crud-app-ts.adaptable.app/users/del", {
      data: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const editUser = async (
  id: string,
  firstName: string,
  lastName: string,
  gender: string,
  address: string,
  birthDate: string
) => {
  try {
    await axios.put("https://crud-app-ts.adaptable.app/users/edit", {
      id,
      firstName,
      lastName,
      gender,
      address,
      birthDate,
    });
  } catch (err) {
    console.log(err);
  }
};
