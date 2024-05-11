import { useSelector, useDispatch } from "react-redux";
// import Loader from "../../layouts/loader/Loader";
import { RootState, AppDispatch } from "../../redux/store";
import { setResponseValue } from "../../redux/features/api-response/api-response";
import Res from "./APIResponse";

const ApiResponsePopup = () => {
  // #region variables region

  const success = useSelector<RootState, boolean>(
    (state) => state.responseSlice.success
  );

  const pending = useSelector<RootState, boolean>(
    (state) => state.responseSlice.pending
  );

  const error = useSelector<RootState, boolean>(
    (state) => state.responseSlice.error
  );

  const message = useSelector<RootState, string>(
    (state) => state.responseSlice.message
  );

  // dispatch for redux
  const dispatch = useDispatch<AppDispatch>();

  // #endregion

  // #region methods region

  // closes the message notification
  const handleClosePopup = (closeModal: { name: string; value: boolean }) => {
    dispatch(setResponseValue(closeModal));
  };

  // #endregion

  return (
    <div>
      {/* {pending && <Loader isShow={pending} />} */}
      {(success || error) && (
        <Res
          message={message}
          isOpen={success || error}
          isSuccess={success ? true : false}
          closeModal={
            success
              ? { name: "success", value: false }
              : { name: "error", value: false }
          }
          handleClosePopup={(closeModal: { name: string; value: boolean }) =>
            handleClosePopup(closeModal)
          }
        />
      )}
    </div>
  );
};

export default ApiResponsePopup;
