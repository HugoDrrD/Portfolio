import React from "react";
import { motion } from "framer-motion";
import Card from "./Card"; // Assure-toi que ton composant Card est bien importé
import Title from "./Title";

const Projects = () => {
  // Un tableau pour stocker les projets avec leurs informations
  const projects = [
    {
      title: "La Revanche de Snoopy",
      type: "Scolaire",
      languages: ["c", "git"],
      imageUrl: "https://i.redd.it/lz2n4odtjl521.jpg",
      link: "https://gitfront.io/r/HugoDrD/MF4DutdYgtGA/projet-ing1-s1-2023-2024-snoopy-snoopy-n/",
      description:
        "Développé en C, ce jeu en console m’a permis de consolider mes bases en programmation, notamment la gestion de la mémoire, les structures de données et les algorithmes. Ce fut un projet formateur pour comprendre les fondamentaux du développement logiciel.",
    },
    {
      title: "ECEcooked",
      type: "Scolaire",
      languages: ["c", "git"],
      imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUVGRUaGBcYGBYXGBcWGxgXGBYXFhUYHSggGholGxYXITEhJSkrLi4uGB8zODUtNygtLisBCgoKDg0OGxAQGy0lICUvLS8yLS0tLS0wLS0tLS0tLS0vLS0tLy0tLS0vLS0tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIAL0BCwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EAEMQAAIBAgQCBwYDBgYBAwUAAAECEQADBBIhMUFRBRMiYXGBkQYyobHB8EJS0RQjYnLh8QczgpKissIVU4MWNENUY//EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EADERAAICAQMCBQMDAwUBAAAAAAECABEDEiExBEETIlFhgTJx8JGx4aHB0RQjMzRCBf/aAAwDAQACEQMRAD8AwdRz5Tm9fCpVylRQNG48DXaTwdyDkP8Ap8OVOV0sU2LnqXxJ08x8qaRNT4D60vil2/m+hrAZzjymBt2p3MeFRyRpRbZ1++YqV63Oo3oqk+m12i9QLeXdXjOo3P3zo1u1zjh/euqAF3qDD+Inu+lcJnuNNCyB40FkHKa6awqDQyQBqfvc1NbbbRr6CuYcdsefyNPVzCoaIGG87gVCNJGaRB8NPd+9afZdAwIKnY8O8Gq8HWmbF4rMRB3U+6f0Pf8AOk5FPIlmMgCp66g31Hj+u1J3cOQdtOI/SrSyQ8hDBG6NuPA8R360MrEgjQcN4HNeY7qFclQnxhhcrBA4EeIP6V4XASsHj9DT1y1xGooNOD2Ig49JkE2qVRt7DwqVdNnGrgOp8B9ancA7MTtrIG+u2u21QA1PgPrXTp5/qPnXhufKvPw8aki6EyN4jj4+FdOiDW9SJgT5+tcLRv8A3ogO/ifmaEt3TX+9FUjPM8H7iR3VIGAZ0nhxrkk93zrwWsmTkk9w+J/SpAV2vV06er1er1ZMnCKglzWDv86mpnWuACQCJDaefA/fOthKLNTl0aabjUeNWNk5gDzANK/sfJjHhJ9aesADT7iujlDIDC2hqf8AT8zQell7II/MPiGpuIJ8F/7f1oXSI/d/60+o+tIU+YS1x5CJU4Xc+Xzpo/p86BZSCfL5mjn9KqbmRpxEriGSe801YHZFDX6n50ZNhRNxATkzp2pR2im32PgaVzqdipPiDWKLnZO0jhffHn8qe4/fdSmGtw0nvprj5H6UL8xmL6Zwnf74Cpg1Bhv4ffyqQoYyJ337Z7joeI7weFWeFx5YfvAWg6MPfHfGzfPxquuWwSfE0awIFE+MMouKx5CrGpaLG4IIbYjYnj4HmKgbAnl+tKW3IMqYJ35HuYcaYsYksxUplgTMyDrw08amKMssXIrbGBtroKYSxJgeXf3DvqTIJHn8j+oos8Kwv6TVT1ips6+XzJ/ShhdzGmvrBj4imrkysDUhh4bEE/8AKplAYA2HHn31weccfpEL5BZiBAmANNOewHH5UNNqJdWPifmag408qcOIgiVucxFctkTr5VLqjpx0o2ETUyOHz/tT2AqRgWagyw5iuF+4/IeppwIOQpK5ck67D7FLqayVOoSdToOVToT3DwHmfoKmggVkCSr1crwNZMg7ancelMLh2JEwADO8zSm0jl8qtqY/rH41B5nI1H3wpixvUFG1Fs7+lLcULjMWQM+mMW20B/l/7A/SgdIf5Tdxtn/mv61OzZidZ+/6Co4s9i5/ISP9JB+gpH/qx7SjhNJ95XWtz5fWp10ivVUTcmAoVFgdPX509h8DeZZW05Hks+GcirL2b6OBJvMJEkIDsCNGb1kDwNfQehvZxroD3CUQ7D8TDnrsKRl6mjpUTkx9zMH0R0MhA65C1z/22EqNogCQ5mNddeVbUew5uJFxbQH5Sskeg0PgauelvZ62tlmsqVu2wXttmYnOvaA1MaxHnV1gcULlpLo910V/IgH61IzMxsxoA4nwfp7oZ8JiTZfXQMrb5kbNBnnKsPLvpTiPA/StN/iT0nbv44C2QwsqLbMNQbkuWUHjlkDxkcKoreH1BPf9Ku1+UFvSDjW7Aisa+n38K6v601eCjYdqVA8WMA94Gp8jQCNSJkAAzoOfLwoRkBNRxwmi0UPHxPzr3WaaUMKSZ4fe3KpEU8t2kFkE1OoTIjXnJNWOAk5mPcPSfqT6VXqYq3wtqFA4/XjSMp2lHSgkwiqJJM6LAj8x118gPWo5yzBEUu0TA4Cd2Y6KJnfeDE0Rth3y3kdF/wCKit77C9HYVcF11xVLO9zrGbWGDlVXuhMkdxmpWcKNRljEjiYRsNfWP3YJbQZXUgd7TBgd00e10PcgTcRTyCs0eZYT6V9G/wDpa011jmYJlUqBGmYtOpmR2Vqr6a6CawMwOdOcaryzd3fQeJfEUWb1mA6QwV22MzKGUfjSdBzZDqB3gmOMVX3dj4GtxWGu5QzopHYZxHIBmC6coEeVU4X1bQGMS60D0FMWPdk8dfvyoGWQPAUa/bkQOHDnVryRB3g7l+fd25/pQ1WK8TG4I8Rp67V2lGAxJ5kD73gKnUCddNTy7u/lXNT3Du39a6ZU8xnThx/Su5Tz+AqQEV2unQd1eW8R4inrVwMJH9j30oDXrejrG5MHvHGa72jMbUallacHTiOFGw4lvDT5GgEkHYmY/rTmETu76zI3ljMOOskLlOXvg1C2A2ZY95HHeOB+vwqX7baUlXu21PAM6g+8eZomE/zNNVIJBGo11Oo7x8ak1UDLnS2UyltNKqeYHyqQBJVVEsxCqO88T3AST3A14plLL+VmHlOnwijdH3gl+07e6GIJP4cylQfUgeZqwny2JHU2PsXgZNqw2uR3Vu8KWeT/ADLB/wBVfUb15UUsxCqNydABXzvoW2y4hbluMw3QkL1g2hSdM8ExMA7co1zYoG22LuAm3bDPaSNSADFwj8zfh5Ag6EmPO53jfaFxWObKWZlw9r893RyP4bbQF0/NJ/hrL3OnejrdrqpxN4BQioTdAcREAMVRdBuQO6aynT+Ne/1l67qxVsq8FEaIvnHiaVxn4EHvM6keCMHY+ECJ5sBxrtY7RwwesqhgzbYEgC3mIXWSAZCBtBrqBI40bEXyNjppsJJnWQdo/ryq0bDtfYWbYzMCjtrARUYOC7cJKgAbnwBhe1goBS6vaRmVoJEGToCIkQRE8IozmL7tzGY8aodI4ldcI0c5pIhSfP3QBqdTzOpqJTJbK7uxBYRMDUKNOQLHXeTyqx6QsqP3gXVCpzEktkmGljJ90tSrrDEEwS0/zDhHlAosZ7zOpfagKidlY01PhrHj30TJp38fGnFXnG8CPCY8dDQLyiTuDzHHaYHp6U3XZnnnHUVw6Zny9/joIPzj1q4FqSNTy7o4n0oHReG3OnEDwGp9T8qswkKdROmmsx3elKy5N6Et6fFSxS+JmNJKjwBIWfKaZs4m5YzKpfq3iQsE5wVCyGBGxbtaHQDlXLXRj3mItBSwUGWMBSGlGkA6yDpxE8qs36Nvns9VDT72ZcnjmmcvlPdUz5ADUo0qQbl77J428bkpcW6jJGV5QwpJ0YaAiWEFe7StZcxaOr2yCLhVv3TQHIIiQJhlkjtAkDnpXzOy+K6PuftEI1snKbckiSILh8oKk6DjttrW+6L6Uw/SFqUYq6akSFu2WOzAjz1EqdRrqKxRvY4krgiZLpPB3LDBHAzMJEGRHMkbAVn+nsIosAje2yweJzsA4J7y2Y94FanE+1OG/Zrlpxca6CwLqpcXHRiA+cmdQNjtJGwrC9J9ItegZSiAzBILMeBaDAA3iTrG0VTjQ6hUWZU2Bt3D+n60UHj9/e1QTTTv+sCrfoH2dxOLnqLcoCQbrnJbBG4Dbsf5QY4xV7MOTEKKFSnvrIApX9n8Pj8qvsf0DeQmAtwDTsEk6cQGAkeGvdSOEwN27rbQkfmMKvkTv5TWrkTTdwHVtXEDYSAQPD79aXTYVbN0TfQSbRYbnIyt/wAdCfIGq82gdVMcxHHjI3B7qHUG4M1kNCBZo3qVevWQBqZMj58B5V6sIimWpBgJH3pVnasKNgB8/WkWAAOlW6rXZBpj8AnEStP7D9BJi7rdbPUoPdBIN1gYIJGuQHSBue7ek6Nw6vLsSVzFVVTqzD3jI4D6Emr/AAANrKFLIEgDK7K0cQWBG9SZH7Si/SfTcNgbVsZbdtEXaFVVEeAFY/266Ht2wuItqqFnCXAoAD5gcrED8QIAniG12FaC/jDZtdeHN2xALBoLIpIGcPxVd2DSYkzpBz3+IXSat1OHRgWzC9cA/DbCsLc8izMCAeCE0kjaan1Cp8v6cXLcaPxZW+BB/wCo9aHvVh7RWcyK6kHLIJHJtB8Y9arMOOyPP51bgbUgi8orIRGEvuq5Fd1XkGIAHIch3Cr/ABftbdvYazhQCGV06wjTOoZciCeB1O/BRzrOVbdD9HA5LpzE5uEZRlLBZG+4mfDhNB1GlVsw8KlmqW9ro2bb38SGSzaVrmQHttlGYMYMACJAnUxVrhMNhDZR0tC6LwVlzjMzCJBJf3QJ24EwBJqwuXwtkMwBTKM/GEiGMcQOPdNIYG6LgAtIts2hCpML1bRABUdkgqNgfjI8gFmF9h+n5cu0kknsOZKzfZL1m1ZsKthhdF3KoHVsFDWz2dMrQwnmeBEUj7R2ct4PwdVn+YMEn0dP9tX+DwxUszEFmiY2AEwBO+5M99UftFeDXFWYFsDMTpqzoygc/cGvJqxDb7QeJUYu0CpUxDwmu3a7OvrQMR0YRZs3DLKzBLgYyc4Vjm7u2sQOY5UzictxSqkHKVOolSZBAPMHY+dE6QvK9uzaydUiHO4ZlE3MpACgHYFmbNpqFjjVKswIg5KI2lUyKp0UDWBvoSAZI211E/rXcJgLl4F0CAKLjdowSIEmOWsDnFdfCSGWSQxCiTMn3lg7mQRVicS7KwTDwE7TZDbCLoYAkyAADoB5U1nIHl3Mzp8eJmPimhF8I4S1lJygBc2aBMSAZ4gmdvpRmYRmmRpBGs+AG/lRMFZe5f6xrVolMiraUyG7OYsQdToN4jQ0HF5cyon+axdigIyhcpXbdWGo5HMJpZIJP6yo4tKaxx/WXeE6yxYsuiBuscPfJ3S0UZpGu4ARf71bJi2OYZIfKzKszmiNJ0gyVHnvVe/SQXDWbuYKkKrnKWCnIdHCqx94BIA3YaiqrH9P4VVYArqiHJaFxnuNmgWHfJFnWQdyJ0ExKVwtk3r5kusCXXRebE4RRiVTO6xcVDopk6aEwwEcdDWM6S6Nv4O4GRn1kJdt+9BGoYDbgCNQdPLcdALc6kG6uRmLtkksbaFiUtlm1OVSBrQfaN1CAtsJJ30GmumtCmQpkIHF/lQgtijMZYX92oIKsAJBBGux331mlLi1YY1wSzKpVQsCQVJPE5TqBooE7weEVW3bgWSzBVDFdTA5jU8dQPKvSwk1EZSAajXsx0J+14xMOSVSGuXCND1a5QQp4Es4WeAJ419w6hbVkpbUIiIQqqICgAwABtXyr/Dzp3DW3udtBfYqFDkILtqADaR3hRcD9oAkZpjmV+n2+mMO8qbqKw0ZLh6t1mYzW3hhMHhrBiuzFiYgVPngoOHMFl/KZ8m1+eb4UfSSAQY001pPo85usfgzkDvC6T6z6VOODDjlZ72lwgDLdGhY5G79CVbxEEeY5VoapPaluzbH8Z/6tHzpmEnWJjcTOOkyO+lsjd3xpsfr9/Gl3uQSO/5616agHmTZBPXD2T4H5VdWcP1jra1AYEuQYOQQCAeBJIHrVGNU8v6Vp+jHC3gTs6lAf4pBUeevmBzpXUmgKh4eDLSygFzKoAVLahQBAGZmmB/oFN0vfQhg6iSBBXQZl3EE8Qdp01POQsMdcuAi1bI4Z7hXIPAIxNzy00iRXnVcdxHr3SrZWwQMriBlu8eqstpcuDkxXMqjideBqP8AiDh7OEvYMYfsm9mzSS3WAFFR7lxpZjLxMzA7hS6Jbw9tmdo1zPcbdmOkmOOwAHcBSOBwQ6RuJea44RAURNJCKWJk/hJLbDYRrNFqCqSeP7wkBLbcyu6CY3LRR5PZIbfiSVg+BPll7qrr1l7RgqSOBAkHUayNjHCt17UPluWLSW+06XcjDabahupI71zRroQOE0pcwEMnbDK4kECJGm2p/MDWYuo0+atjvUY+IMPtMiW4kMBzKsB6kU1gekntjKjLBJIBGaCdysEb1eN0cvUYN1EPeJzNzZla72ucKjKPGK70leSzCWVUXW1zACVX83eSdge/lBY/Uq/l03/EzFhbV5TLj2a6TYoi3RkzgsrNotyToLevKTB1iN5mnreAtKHuW89uM4IRoBykyFBkLqOEVT+zNi4Q1o3jlC5stwC5bAmCCGgxrwYCiWuik1ZsLhX6wqLSm0qG4dTlFsk5CQC5JJMbgRXnZAVJPrxXff0P8x+QNjYo3I5/eWdzH20SLf7xde0rM0MTIDMJLMST2VlydgeCOBSUVm7TtqzECSx3nlyjhEcKtegkKOgbKder4/ui05AgbtINkKwPwnnWYxnTWJXHYhb2GFtUcgZdOtTXJcOYwWIAOYcJB2EAELoSvaZjJZwtc+ksOlcR1VokAZiQqDm5OmnGILHuU1T4R7iOpNwsWZQwZpBUsAx10ETm0j3anisSbtwOwyhQciTO8S2sSdh3eZonR/R3XN+9AKAdoQYLfhWTyBJI4SBJk1ygInm+f8fneegcYxpuNzx7S6W0l021XI2duydCoKgsXJHBQrGe6NzSuO6Pt2f/ALi2tsETnIYWmU66ueyDrqrag8xBLVi4q3WUAALZVBwC23Y9YYGg0tIo/mPfWi6K6fthQskgb7zOpMcI2+NLTIqgA363f6SJkY7ivtMrdwNtgCAAeDLvHjxUzQ8P0WiKVhYJk9lRJknWBqBsKZxeMsLicQisqgXeyPdEm3bLBZ098voOM1O/dVRmZlUc2IA121Na5yIdFmctMLi6YsYac5LWWBGWJKvBZuyB2lYKSeRk7Ew/gb2DkNaOHDEE5kNvmMwzDvaqQ9HYnGsVt2m6tSuVm7KHQMtx2O6mfdWTHDUwPpzoNrN1rdwqzFEZWCkDYjsk6kZswI8NNao8I6bbb1h48a5DQbf0l7ivaKwg/wAxGbNBRWDORMSAup4HwqmxN9sSxmUVSNNJJHaWeSjQwdSeQ3tr/QGHODa/bDgmznX948CUzbA8KxeBxRsmQOyffUcR+YfxD47coNcIAteZiDWrae0s8ZgiV0uEzpqBGoOsiIrJdMW264q+ygHTYSJY+MQJ7q34iJEQddNjPGk06PtObz3LLXXJyIRbZwAFUqoIGVWzMZJI4SYGjcGcqd5Kcephcxljom7eClUgOCVkGHWY7IAJYd8R319P6C6ZXB4ZLd/D3C4XtXrrIVd9gouMTlA7KqrEaAATSOOsYh2tdUcri+OvYa5LVtCVTKCDkYwYG+Yc6b9p7iXMO1kmXuAALENwOYqdgCBqdOFc3UsxA7ftGnECaAs+8q0w9u52jaAMmdFDA9zL48DXbWFNvS2xyj8DajmYb3hqeM1hsN0pfw7FVMBTBttqojSI3G248a0nR3tVZeBcm03fqn+8bD+aKe2JwNtxJWK6jUsbnSiBiuW4WBghbbtrAMSoI2I1mNd6rel7xyFroyFlyWbRILySpZ2gxIyjaYAOstAqL2IZne4rsudieyzLI2WYOvZC0ujDOZksY7TEsxG8ZjrFOTBRBiy0IToTUXZJ130+VL5jt3yfvxFSFhW7R4z6cPhFPJqCvm4hMFazNl5MSfAGf6VfC2CIIkHhVZ0dcCtcBMaqfhHDwp1MekwZ23j6DWkZSzRqaU5MauYcssZmaNQrMxUkcGB3U7GeBpXEe2FvKOqtsxIB7XZVe7mY7hHfQz0i4clRKQIDaaweUxr8qyqJlGX8unppQ48V/VMbIpNLGcdj7l5s1x80bDZV/lX671uv8OlK21J/GXI8NgfPL8azHs7jbQDWL4Xq7hBBaMofQQTwmBB5+IrbYO8vZZCpVTplII7JiBGnCKn6xzp8OqlXT4x9VxvEdOnrsiIDkcq2Yhc2yk232VlJiGjNMAgwDW4uywa6gMdXnW3GmUOFuDXuzKJ4Ban07gsvWXwC1lwzPBAygr+8DAkZkMSRruQRFDwCKFBQCG7WgAktqTppxqXyhQVg21kGFvvbyYS1acsA7vDEZ0RUuAhhuCr3ETWs/gLnWu17cMSw/l2Qf7QK0V5QFcgAHKZMa6AxJrP9GAtbDMQSQJOVBOg3gCixkFSfj9bMu6JW8SwLr4l/0DbL3mthsue0+sToLlqRE6yCR5070x0MFxtm8Lty5eVSUW4w6m0dV6zq0ALHU6SPd1OwKfspbjFL327g/wCVv9Kh7fe1drCY2yrK5PVguQBCqWbJHP8AHI5EeFHpJA0bmjE9Z/2D4m3H7TQ4i9ftslxEOJcSO31IyyCMyzly6n8J2nfehWOgnxjvfu3OrvLCMgUMkABkMggk5W4HmDMCn8Ph8TcGlrqQfx3GU6c0RCS3gxWhe1/RuNTCBOjDF7rVZ2ZkDusHMcz9mZCSNBlEARpUWJ8rHS9D879qi2ZcZ1Y+faZ+10ErHM7se0wyoMkMjZT2yS2jJupB76treECgIgAUDQDQAVJLTrdvK0Zs4JjaXto7Ed2dno4IED+/jUPU5W1lb2Eux+dQx5MTxOFU76kaDcHXeCNR/Slf2LKew7JIj8xX+UtMHxka7VZi1qSaHdwwYFTsQR4g6ETQpnI2uY2O96mfu38KRkjOF0LqrsF1OYteUbzJJnmTR+hfZ5JD9YwZGabYCQknRSCs6qB2uIJgwaO2AYW2QXnClSpGW1AQiCAFQQY2Pzod3C3L3Zt25vLYxFy2A7WyWU2lRGYEEj94dCYJUbcLg5byY2O/rJyoXzMOJZdGraw+OQ2FVWxByXVXQXAAzZoH4lgnNykcasfbT2Uu4y7h7tnEC01nOCrKWV0cqToCNewPhtFF9hujDbw6XL2HWziXEXe0bjmGOWXYkgRrlmBNB9rva67g8RhbKYR763zBdSdO0BlUAGWAObWNPUV9NqvRd16yXLkF612nnwLW+j3suRmWxcUlZiQjbTBivmuJsMp1hZAMMyqdvyk5vQV9d6YtzbvLzS4PVTXyHEDRDzUffxpyHeW9CGOuj6dvvLToG5NrLIPVsVkZgI0ZR2gDorAbVe9FFeomcUpOuVAjqz526whyDk5QSsRWa6AuQHBBhnYg8NEQEeqn0o3sn7ThSVvELbukujbC2W/C3JTvm4GZ307wnOtlW63keQqr6Se5E1i9H23JY2ioMBVd2uXABuXuZjqZ1AJGg31pPpC0iQltQo3MDcnaTxMfOmPaTpE2MO9xYzdkJOozMwUGOIGafKvlN/F3Gcs1xy0+8WaT6HTwGlZ0vSZOpt7oTX6kYaXcy79rsBbCm9MOdBr75iFXLxG5J3AFZQd9N37zOZdmYgQCxJgd07UqVr1U6dsSAMbkrZlyMSBUfwOLBhG0OyngwHDxjh6dxLmHI1GtVhtk/ry5GrzDPKqTuQD8K4gjeS5BR2ibqQJ57eZ0qUxpyo+LOqjxPpoPiaTDzrQ8x2LYXGUaHnmp+B/rQbt4t+gqan/LPfB8xHzpq5bBEVwi831XFcOQDqYPLh51zFYMP2lIB+B8eR76KuEHEmjMwUEnQAT5V0UDRsT3QvR9kFbl68FdGzZNl09yWI117WncK0lzpmyPdbOYJhBI05t7o8yKxBusSWzFSeAOw4Dx764EzsisSwZ7SkEkiGdQdNtjUuTCHNsTPXTxUS6A/War/wBS69Ht3Ga3bPu2hq9w67gCXOgORZBBEzNG6IxOUJaZYGQQQuUKwIV7TrPYcOQOGrAaHQu3sVft9bfwyB7li2wVSCQ1xyhaANSVRZjiWArUez+GXFWLeIxWGW3fu2nt3RlKMUYwRzEhVYTqNKnKro9BJUZ2bWTvKNiPdP4pHwrM9ILdwmVVCvbbRWMqcw/CxEiYEgxrB5VozhClx7dztPZbLm/MujW7kfxKQe4yOFExOGS6hRxKncfEEHgQdQanVxiemFjuP8S5MmQC8Zoyg9nvaQW8Qr3kyoFYEoS5k5Y7OUaaVqukOl+jr7pcvYV77W/cJtqCOIHbdQROsHSshivZi6D+7ZXX+I5W+UHx08KYs4TEKApw7sRxV7MHl71wH4V6g/0TUVevmv3keV+pdrcWft/ibe57ckj93hWn/wDrcRPXq89V932ixV5lt9alnOYAtLLaAk9t52AOoVayuIxVxHS2beRnBPaZDCjiQjGZMAa8+VOdE48rdymFuFSM0Fxr7qoARlWQJmCT3AVNnxYseMtiFnt3+Y7CpY000t7EpZUKXAJ4u2rHiWZjLNQbd2SGmRvO/wAaoLlvEMxuOoViIIbUAcggnxMkH0oQwKCWczO8wF81ED1mvIXpVrdrP6z2UcqKC7e+0137Yje60j8w1E0a24Okye751jLePCn90CFPvHIzWxpoQRGvDTTntUrfSjq4dboczGSQc0/hCqJnjtw8aBv/AJ7dv6zDlSpq7ixVb0pZuHK9okOk6q5RipGoDDvVTBMGO4UrjukHezLnqwrEFlJUMANYJ1EGAYOp8xVPg+msl61bFwsrsFKsS0AyAQTqDMaTz0p3T9Ll06xyLk2TMqmj+fEs7ftli7RKtduSN1u2OsA46vaA9c1WFr/Eu4NCMK55dY9n5565jsAlyMwIYbMphh3TxHcZFVGM6Bdly9cI/ityfUMB8KuwZunYeYlT9rH9N5PlJv8A41P2JH96lpivbm5cDfu8MgYET1zXNxG2RPnWOx+NTsrbZXKjUgghRsC0cTG259TTT+zBBAzqSxCqAkSxOkknQDUnQ6A1PG+yVy3ds2UYObwZi5GVVKAZpiSFgiBqSSaePABsPfxUxepdFITHput7uA6J6eW2gR00E9pdZOpJK95J2neg20w4yEsGksWRSWAEE5er3KqSBtO1KdIdHXLV3qbghpWCCCCCYDg8t/QzFW+FsIhGQQTK5uLaifOYk7DbwpxZFw2yi7nm5kbLQY1URxfaWLSFLWWYWFL6gocm2mWYMHXhtVTjbb22IdGU6bQwMjMCChOhBB86vsRcgORrK5h4nPA88s8z2uVJdPt+9YDYNlH/AMaJb+aGrnzhVVkA8139xUzpen1sUYnaVKODt/UeI4V5jA1rr2wdwD986Z6Ospr2RmB3Opg7anbj6Vw6qxxDz9KcQ1XYi9m2X0AIHFiCI7hO58NKt0WIA4VyprSMmQvzI+Yjin1c8oUfP5t8KXqTtoO8k+p0+dRrhKwKAEKT2G/hM+kNT7GkbImRzH386Yw4zIpnWIPiNPmKCBnGwMMKR6UuaKv5jJ8F1j1jTxpxmAEkwKNa6CuXyHY9UgBjMss0xrkkZRpx112FC7qgtjM6ZC+QUJR5x9giuG7EEMAylWB3hlIYacdQKPjMH1btbYCVMSNjIBBHkRQerH2TWAg7z2iCwqb72Cxuey6kkslxjJ3Oft5v9xb0rdYbpuw939nF1TfCBzb1zBdNeXEaTNfKfYTEBMQU2F1SP9S9of8AHPW1w/Q2ETFf+oXX6u5bUrLMFtmVKBjO7ZSRE8tJqPIo1m/iR5AVNRn2us5b1i7/AO4Gst3soN21r3KLw9KrlNc6X9qreKYYewjMFZLjXWBQLlOyoRmlgSO0F0JImIpTGXHVcyCSNSv5hB0nhrFTZkJIHeEh0g3LJTRFqu6Oxmca+8ujDaDrtPhT6mociFTRlKMDvM/7X4Cct9RJUZWPIHYnuEmfEVS4XpBQ2Vm6ocIjUxMkkREfE1v1NVvSvs/h8Qc9xSGgDMrEGBz4fCqen6xVUY8o29f4nNia9SHeZ3pfHupti46tb7W8g6RvB7e+g5mag2Lw7kC2MzDUKAw25gwPrWk6P6AsWwVb97oAOtytlSdABGgnj3DlS/S/spbfI2Hy4d1J1VdCCI1AI17+801es6cMF3HvwPkczTjzEFhR9u/weJX2GZlJN0qATplUFeQYkcBGtEPSllJt3stwkSpypK/zbDbUH50n0h7G4kwqX1ddznLKc2xMAGRoI1pvon2LyZjdukkrlHVysCZPaO/LaifJ0umy/wAAbzA2cnTp+SZDOLmy5FtyEUye0QGzldJOszxk9xqsXpC2MVYDgXClwAtECWGVY13DEHyrYX+isOUW2y6KoAl2DZRsC8gkeJoGF6HwyMDbsjOBI0LMO/UkDuPHhWY+rx6CNJ3v8uDlxsSNx+e0snNVmAxBZrgbNoRvsN9B98KfuMQJKsBzIPx5DvoTmo0GkEEczXNmwYG7o9q5BPVPmgbkFHtmO8C4T3xHGmH6WtNi7EPul1BIZe02RhIYCP8ALjXiwFBY0EdC3sY5tWL/AFLLbLFiCRBuWgQR3gN3HY6GqcSB2APvEu2kWJP2mwq3bgYCXte737yp9fIjxrPIJiO172UL75zGYHHcxw8a+m9LeyeGCM6hhGpXrLmQjiMmaAO7asR0Dax64q8L2X9mEi0BkgCR1YQLqAFkGapxjStXxFZGViCBLjB9HItkWmVWEDPpIY8d+HLlAr5hjb8mY94u3+52addONfVsbdyW3b8qOfRSa+U3xGUflVR8Kbg3u4/pxyR+flRcXB9/qKZ6OYF3gz2U+b0Aij9HL23PABR5yxP0qsQesvwjcsK5faEPPYeJ0+tdFBxB1APMt5DQfGT5VpnkY1sxS8v0qFca4Jjj96V2jEqJk7bRrypvC/iHJj6HX9aTQ01Y0fxX4r/Q0J5g5BaR3BXbaXM9wMQolABm7c7kcwNvE0bHdPXzraRUA/OM7MOPZVoHkSTShr1KOJGbU28BOpdF0LtK26bjsXYqzMZJBgbAAARoAABUOrbkPX+lP3MPOoOU+oPiP0ihG1cHBT5kfCD86qVcJ9oY6zKBVwOGa6jq65VZTIMkwfArG0imWvs7h79wsJ1OoOvAHU7xosTyqC4e4fyL3yzfCB86ewWDVSGJzsNieH8q7D599YxwpuBZgnPkY7mW3QdrIpOUIXM5dOysQoMcY1PeTVujVU2rtN27tePnUsxYyrGwAqPoBMxrz+/GjK1JpcoyvUTpKlaOK1duSVIABMbNsfHuoCvRFep2SPVpHqzGtsHj/mFTPcFSiYK4TMqwGkSWPxftT5RpUg9dz0LEkURDXY3cNmrhahZ6iXpQSGXknNAtYh0GVbad7FyMx/MRlJJ8TUmehM1VYrWIyG567cuOCHcBTuqCJHIsSSR4RQ2NcZ6Ez08AnmIJAkmagM8EMrMrDZlZlYDSRmUgxoNNtKi92lbt6n40NxDuIbGe2eMtr1Tul1SdM6QzLuIdIEiIMgnY8aSPtpe//Xtn/wCVh/4Gl8WFcZWEj71HI1U3MEw915HJh/5D6g16uJcLD/cXf1kbOwOxljj/AGvv3Lb2zh1UOrLIcvAIgxtzrPXcRJkhhP8AC0esU0y3B/8Ajn+Vl/8AIiojrDtbI/mZQP8AiSfhTxgwj6TUPH1bp6RTr1/MPWKscBbhZO7HMfoPQCvWsLrLnMeAjsjwHE95+FGZhtxPAan0GtLoA7Qc/UtmAWpI7Gg9Qbjsq6RAJ4Ko4nvnNRUBXeF/m1byUfUijWsSEUqgjWSTuSeJ/SgN9puHHW7RXpK2qqEQaJ2pO7HafQGkBTqMWLE65tfLUD4CkC4XsncfYpqihUIne5Oii52VbipH6H50GdKNZAII4GfjWNNG+0aZTuTB7th+tQS8c2VhE7cttdaHh7xbQ8o8xv8AWiODGupH3oRWgRToCPLDk0bEYZkjNHa4AyRzBH2KFZZcrAjM591icoURpm15zw1r1m4gJYor6AQSw1GhK9nbxg6HnXaYpUsSQNEVqS6wxwB4bn73GtDYSTJJjh8dRtFCUmqhMt7dymrd6qC0+VpPugcOZ7vKn7F6QDETwpL44YbSalzbv0drxymN4MeMaVUJdoyX6lbDHrllhg8W2vWQNgOHErv3wD/qqwW7VL1oIg60dcRSMmGzdR6ZZbC5UutqrGIqX7RSDgMcM0susqJuVX/tFROIrhgnHNHmu0JrtJNiKE+Ipq4Ips0ce9S73qUe/QXvVQuGIbLGbl6lbl2lsXehTrG2vITrSv7SQO1ryP0P61UmLaILEi4470JmoNq8SdY2kRy4/T1r1/3T4GmhaiWu6MkSe7XmfTYGhm53r5ZmPpAr2IzZiNDM6yR9NN6CLR5L6k/SiAlHhL6QvWDbUnvIH/FdfU103SBoQg7oHyqAQ847gIqQQDh58fWtoQwK4kBHAE/fM17ITvoOQ+potBw17Ms95FbOhQPv78aG+HUmSKLXq6dUrqJZMUOuitMwSZBDGNNmHnofrU1vmddeEfp98a451U+I+E/SovQiKyEq20OWB2O+4Oh9ONTBPKKhhdQQRIHOifs6948CRW3MGUek8RUH0Opif7EfKiCwP4v9x/WuiyvIeevzrLm+MOwizoCCc2gjbWTRbWIJffTb0G/wol21mG8Uq9rLEHb9DXcxRazcsg9TFyl02FSBoCJlxpbtTF6kwakGoCghBzHRfrvX0lNezUPhiF4hjvX1E36UzV7NXeGJ3iGMm9UDdoBaok0QQQS5hjcqBehk1yiCwS0kWpdrRHu7fl/Tl4bUah4i7lExNEJwYg7QSwdBoRw2I8uVcvXyBBE9/Dz5Us94vBOg4AfrRLF4zlOsz999HUo06vqEcLTB5hf+ooFxmzrG2s/Q0RTvUqwbRpnqg7HgOUfWanXq6dPVFEA2EVKvV06er1er1dOn/9k=",
      link: "https://gitfront.io/r/HugoDrD/VmXXYHKr617L/2324-ing1-s2-escooked-H-Bar-la-creme-de-lacreme/",
      description:
        "Projet de jeu collaboratif avec interface graphique développée via la librairie Allegro. J’y ai intégré des sprites externes, ajouté la prise en charge des manettes et personnalisé les éléments visuels avec GIMP. Ce projet m’a permis de me confronter à une architecture logicielle plus avancée.",
    },
    {
      title: "Réseaux Trophiques",
      type: "Scolaire",
      languages: ["c", "json", "git"],
      imageUrl: "https://static.vecteezy.com/ti/vecteur-libre/p1/2141037-diagramme-montrant-le-reseau-alimentaire-dans-la-foret-tropicale-gratuit-vectoriel.jpg",
      link: "https://gitfront.io/r/HugoDrD/GrkeHvWrsG2t/projet-reseaux-trophiques-equipe-3b/",
      description:
        "Projet d’analyse écologique basé sur la théorie des graphes, visant à modéliser l’évolution des espèces dans un réseau trophique. J’ai conçu l’interface utilisateur et géré l’affichage graphique, en m’appuyant sur des données structurées au format JSON.",
    },
    {
        title: "Gestion de commandes",
        type: "Personelle",
        languages: ["python", "sql", "html", "css"],
        imageUrl: "https://www.solutions-numeriques.com/wp-content/uploads/2015/09/ecommerce.jpg",
        link: "https://github.com/HugoDrrD/Gestion_Commandes/tree/main",
        description:
          "Dans le cadre d’un stage, j’ai développé une application de gestion de commandes pour une entreprise de plomberie. L’outil permettait de créer des bons de commande sur PC et d’y accéder via QR code sur mobile, facilitant le suivi des stocks et réduisant les doublons.",
      },
  ];

  return (
    <section id="Projects" className="bg-zinc-800 text-zinc-500 py-20 px-4 overflow-hidden">
      <Title text="Mes projets" />

      {/* On parcourt chaque projet et on crée les divs correspondantes */}
      {projects.map((project, index) => (
        <div key={index}>
          {/* Barre horizontale de séparation au-dessus du projet */}
          <motion.hr
            key={`line-${index}`}
            className="h-[1px] my-10 max-w-220 mx-auto" // Bar horizontale stylisée avec bg-gray-800
            initial={{ opacity: 0, width: "0%" }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className={`flex flex-col md:flex-row justify-center items-center mb-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`} 
            initial={{ 
              opacity: 0, 
              x: index % 2 === 0 ? -100 : 100 // Valeurs réduites pour éviter le overflow
            }} // Animation pour apparaître depuis la gauche ou la droite
            whileInView={{ 
              opacity: 1, 
              x: 0 
            }} // L'animation commence lorsqu'on entre dans la vue
            viewport={{ once: true, margin: "-100px" }} // L'animation se fait une seule fois quand l'élément entre dans la vue
            transition={{ 
              duration: 0.6,
              type: "spring",
              damping: 20,
              stiffness: 100
            }} // Décale l'animation pour chaque projet
          >
            {/* Carte du projet */}
            <div className="max-w-100">
              <Card
                title={project.title}
                type={project.type}
                languages={project.languages}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            </div>

            {/* Description du projet */}
            <motion.div 
              className="max-w-120 m-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>{project.description}</p>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
