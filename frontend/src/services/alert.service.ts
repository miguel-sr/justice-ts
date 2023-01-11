import Swal from "sweetalert2";

export class SweetAlert {
  success(text: string) {
    Swal.fire({
      icon: "success",
      title: "Excelente!",
      text: text,
    });
  }

  error(text: string) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: text,
    });
  }
}
