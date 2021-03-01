import { actionTypes } from "../action/actionTypes";
import { studentData } from "../studentData";

// const setStudentList = (studentData) => {
//   localStorage.setItem("studentList", JSON.stringify(studentData));
//   const studentList = localStorage.getItem("studentList");
//   return JSON.parse(studentList);
// };
const student = {
  id: "",
  name: "",
  phoneNumber: "",
  birthday: "",
  gender: "",
  dayAdmission: "",
  img: "./studentImg/default.png",
};
const initialState = {
  studentInfo: "",
  studentList: studentData,
  studentisModified: student,
  newStudent: student,
  isFinded: false,
  isSearching: false,
};
export const students = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_SEARCH: {
      return { ...state, studentInfo: action.payload.studentInfo };
    }
    case actionTypes.SEARCH_STUDENT: {
      return handleSearchStudent(state);
    }
    case actionTypes.MODIFY_STUDENT.EDITING_ID: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          id: action.payload.id,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_IMG: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          img: action.payload.urlImg,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_NAME: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          name: action.payload.name,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_PHONENUMBER: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          phoneNumber: action.payload.phoneNumber,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_BIRTHDAY: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          birthday: action.payload.birthday,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_DAYADMISSION: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          dayAdmission: action.payload.dayAdmission,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.EDITING_GENDER: {
      return {
        ...state,
        studentisModified: {
          ...state.studentisModified,
          gender: action.payload.gender,
        },
      };
    }
    case actionTypes.MODIFY_STUDENT.SAVE_EDIT: {
      return handleSaveEditStudent(state);
    }

    case actionTypes.ADD_STUDENT.ADDING_IMG: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          img: action.payload.urlImg,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_NAME: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          name: action.payload.name,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_PHONENUMBER: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          phoneNumber: action.payload.phoneNumber,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_BIRTHDAY: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          birthday: action.payload.birthday,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_DAYADMISSION: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          dayAdmission: action.payload.dayAdmission,
        },
      };
    }
    case actionTypes.ADD_STUDENT.ADDING_GENDER: {
      return {
        ...state,
        newStudent: {
          ...state.newStudent,
          gender: action.payload.gender,
        },
      };
    }
    case actionTypes.ADD_STUDENT.SAVE_ADD: {
      return handleSaveAddStudent(state);
    }

    default:
      return state;
  }
};
const handleSearchStudent = (currentState) => {
  if (currentState.studentInfo) {
    let lowerCaseStudentInfo = currentState.studentInfo.toLowerCase();
    const studentFinded = JSON.parse(
      localStorage.getItem("studentList")
    ).filter(
      (student) =>
        student.name.toLowerCase().indexOf(lowerCaseStudentInfo) !== -1 ||
        student.phoneNumber.toLowerCase().indexOf(lowerCaseStudentInfo) !== -1
    );

    if (studentFinded.length !== 0) {
      return {
        ...currentState,
        studentList: studentFinded,
        isFinded: true,
        isSearching: true,
      };
    } else {
      return {
        ...currentState,
        isFinded: false,
        studentList: "",
        isSearching: true,
      };
    }
  } else {
    return {
      ...currentState,
      studentList: studentData,
      isFinded: false,
      isSearching: false,
    };
  }
};
const handleSaveEditStudent = (currentState) => {
  const studentLists = currentState.studentList.map((student) => {
    if (student.id !== currentState.studentisModified.id) {
      return student;
    }
    const studentModify = {
      ...student,
      name: currentState.studentisModified.name,
      phoneNumber: currentState.studentisModified.phoneNumber,
      birthday: currentState.studentisModified.birthday,
      gender: currentState.studentisModified.gender,
      dayAdmission: currentState.studentisModified.dayAdmission,
      img: currentState.studentisModified.img,
    };
    return studentModify;
  });
  return { ...currentState, studentList: studentLists };
};
const handleSaveAddStudent = (currentState) => {
  const newStudent = [
    {
      ...currentState.newStudent,
      id: Math.floor(Math.random() * 15632728191909010),
    },
  ];
  const studentLists = [...currentState.studentList, ...newStudent];
  return { ...currentState, studentList: studentLists };
};
