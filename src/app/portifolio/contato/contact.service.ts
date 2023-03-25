import EnumHelper from "@/helpers/enumHelper";
import { formData } from "@/interfaces/contactPage";
import { toast } from "react-toastify";

export async function onSubmit(data: formData, refresh: () => void) {
  const enumHelper = new EnumHelper();

  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    toast.success(enumHelper.toastMessages.success);
  } catch (error) {
    toast.error(enumHelper.toastMessages.error);
    console.log(error);
    throw error;
  }

  refresh();
}