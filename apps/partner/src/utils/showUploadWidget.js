export const showUploadWidget = (
  cloudName,
  uploadPreset,
  fieldName,
  setValue,
  setIsLoading
) => {
  cloudinary.openUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      sources: ["local", "image_search", "url"],
      showAdvancedOptions: true,
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#90A0B3",
          tabIcon: "#0078FF",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#0078FF",
          action: "#F95C32",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1",
        },
        fonts: {
          default: null,
          "'Open Sans', sans-serif": {
            url: "https://fonts.googleapis.com/css?family=Open+Sans",
            active: true,
          },
        },
      },
    },
    (error, info) => {
      setIsLoading(false);

      if (!error) {
        if (info.info.secure_url) {
          const secureUrl = info.info.secure_url;

          return setValue(fieldName, secureUrl);
        }
      }

      return console.log(error);
    }
  );
};
