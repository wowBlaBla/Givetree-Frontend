interface ShowUploadWidgetTypes {
  cloudName: string;
  uploadPreset: string;
  fieldName: string;
  setValue: (name: string, value: string) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const showUploadWidget = ({
  cloudName,
  uploadPreset,
  fieldName,
  setValue,
  setIsLoading,
}: ShowUploadWidgetTypes) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
          window: "#ffffff",
          windowBorder: "#90a0b3",
          tabIcon: "#f95c32",
          menuIcons: "#5a616a",
          textDark: "#000000",
          textLight: "#ffffff",
          link: "#f95c32",
          action: "#f95c32",
          inactiveTabIcon: "#0e2F5a",
          error: "#f44235",
          inProgress: "#0078ff",
          complete: "#20b832",
          sourceBg: "#e4ebf1",
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
    (error: string | undefined, info: { info: { secure_url: string } }) => {
      setIsLoading(false);

      if (error) {
        throw new Error(error);
      }

      if (info.info.secure_url) {
        const secureUrl = info.info.secure_url;

        return setValue(fieldName, secureUrl);
      }
    }
  );
};
