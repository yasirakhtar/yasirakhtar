new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
                  {
            name: "1. Al-Fatiha (The Opening) ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://c.saavncdn.com/281/Islamic-Music-Urdu-2021-20210628114046-500x500.jpg",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_001_dTacVzr.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_001_dTacVzr.mp3",
            favorited: false
          },
          {
            name: "2. Al-Baqara",
            artist: "Shaikh Mishari Rashid",
            cover: "https://play-lh.googleusercontent.com/PBKf9aaASg-aaUmT-c0c7LtG4P7vGTGGk9ZgHghBz1Myq3gxt7dZT-HPsc_PIFH0TrA",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_002.mpeg",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_002.mpeg",
            favorited: false
          },
          {
            name: "3. Al-i-Imran",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_003.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_003.mp3",
            favorited: true
          },
  
          {
            name: "4. An-Nisa ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_004.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_004.mp3",
            favorited: false
          },
  
          {
            name: "5. Al-Ma'ida",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_005.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_005.mp3",
            favorited: false
          },
          {
            name: "6. An-An'am ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_006.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_006.mp3",
            favorited: false
          },
          {
            name: "7. Al-A'raf ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_007.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_007.mp3",
            favorited: false
          },
          {
            name: "8. Al-Anfal ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_008.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_008.mp3",
            favorited: false
          },
          {
            name: "9. At-Tawba ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_009.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_009.mp3",
            favorited: false
          },
          {
            name: "10. Yunus ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://play-lh.googleusercontent.com/6l95DDW0F0_hV6opyiqUx6O_Gdg7j3YQzJcCnOJ5758ouIXqdi6bjfu3sC1ystabHdo",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_010.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_010.mp3",
            favorited: false
          },
          {
            name: "11. Hud",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_011.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_011.mp3",
            favorited: false
          },
          {
            name: "12. Yusuf",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_012.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_012.mp3",
            favorited: false
          },
          {
            name: "13. Ar-Ra'd",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_013.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_013.mp3",
            favorited: false
          },
          {
            name: "14. Ibrahim",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_014.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_014.mp3",
            favorited: false
          },
          {
            name: "15. Al-Hijr",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_015.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_015.mp3",
            favorited: false
          },
          {
            name: "16. An-Nahl",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_016.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_016.mp3",
            favorited: false
          },
          {
            name: "17. Al-Isra",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_017.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_017.mp3",
            favorited: false
          },
          {
            name: "18. Al-Kahf",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_018.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_018.mp3",
            favorited: true
          },
          {
            name: "19. Maryam",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_019.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_019.mp3",
            favorited: true
          },
          {
            name: "20. Ta-Ha",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_020.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_020.mp3",
            favorited: false
          },
          {
            name: "21. Al-Anbiya",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_021.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_021.mp3",
            favorited: false
          },
          {
            name: "22. Al-Hajj",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_022.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_022.mp3",
            favorited: false
          },
          {
            name: "23. Al-Muminun",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_023.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_023.mp3",
            favorited: false
          },
          {
            name: "24. An-Noor",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_024.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_024.mp3",
            favorited: false
          },
          {
            name: "25. Al-Furqan",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_025.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_025.mp3",
            favorited: false
          },
          {
            name: "26. Ash-Shu'ara ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_026.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_026.mp3",
            favorited: true
          },
          {
            name: "27. An-Naml",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_027.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_027.mp3",
            favorited: true
          },
          {
            name: "28. Al-Qasas",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_028.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_028.mp3",
            favorited: true
          },
          {
            name: "29. Al-Ankabut",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_029.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_029.mp3",
            favorited: true
          },
          {
            name: "30. Ar-Rum ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_030.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_030.mp3",
            favorited: false
          },
          // 31
          {
            name: "31. Luqman",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_031.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_031.mp3",
            favorited: false
          },
          {
            name: "32. As-Sajda",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_032.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_032.mp3",
            favorited: false
          },
          {
            name: "33. Al-Ahzab",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_033.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_033.mp3",
            favorited: false
          },
          {
            name: "34. Saba",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_034.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_034.mp3",
            favorited: false
          },
          {
            name: "35. Fatir",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_035.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_035.mp3",
            favorited: false
          },
          {
            name: "36. Ya-Seen",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_036.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_036.mp3",
            favorited: false
          },
          {
            name: "37. As-Saaffat",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_037.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_037.mp3",
            favorited: false
          },
          {
            name: "38. Sad",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_038.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_038.mp3",
            favorited: false
          },
          {
            name: "39. Az-Zumar",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_039.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_039.mp3",
            favorited: false
          },
          {
            name: "40. Ghafir",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_040.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_040.mp3",
            favorited: false
          },
          {
            name: "41. Fussilat",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_041.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_041.mp3",
            favorited: false
          },
          {
            name: "42. Ash-Shura",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_042.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_042.mp3",
            favorited: false
          },
          {
            name: "43. Az-Zukhruf",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_043.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_043.mp3",
            favorited: false
          },
          {
            name: "44. Ad-Dukhan",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_044.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_044.mp3",
            favorited: false
          },
          {
            name: "45. Al-Jathiya",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_045.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_045.mp3",
            favorited: false
          },
          {
            name: "46. Al-Ahqaf",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_046.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_046.mp3",
            favorited: false
          },
          {
            name: "47. Muhammad",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_047.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_047.mp3",
            favorited: false
          },
          {
            name: "48. Al-Fath",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_048.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_048.mp3",
            favorited: false
          },
          {
            name: "49. Al-Hujurat",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_049.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_049.mp3",
            favorited: false
          },
          {
            name: "50. Qaf",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_050.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_050.mp3",
            favorited: false
          },
          // 51
          {
            name: "51. Adh-Dhariyat",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_051.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_051.mp3",
            favorited: true
          },
          {
            name: "52. At-Tur ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_052.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_052.mp3",
            favorited: false
          },
          {
            name: "53. An-Najm ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_053.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_053.mp3",
            favorited: false
          },
          {
            name: "54. Al-Qamar ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_054.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_054.mp3",
            favorited: false
          },
          {
            name: "55. Ar-Rahman ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_055.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_055.mp3",
            favorited: false
          },
          {
            name: "56. Al-Waqia ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_056.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_056.mp3",
            favorited: false
          },
          {
            name: "57. Al-Hadid ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_057.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_057.mp3",
            favorited: false
          },
          {
            name: "58. Al-Mujadila ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_058.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_058.mp3",
            favorited: false
          },
          {
            name: "59. Al-Hashr",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_059.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_059.mp3",
            favorited: false
          },
          {
            name: "60. Al-Mumtahina ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_060.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_060.mp3",
            favorited: false
          },
          {
            name: "61. As-Saff ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_061.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_061.mp3",
            favorited: false
          },
          {
            name: "62. Al-Jumuah ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_062.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_062.mp3",
            favorited: false
          },
          // file not found
          {
            name: "63. At-Taghabun ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_063.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_063.mp3",
            favorited: false
          },
          {
            name: "64. At-Taghabun ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_064.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_064.mp3",
            favorited: false
          },
          {
            name: "65. At-Talaq ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_065.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_065.mp3",
            favorited: false
          },
          {
            name: "66. At-Tahrim ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_066.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_066.mp3",
            favorited: false
          },
          {
            name: "67. Al-Mulk ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_067.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_067.mp3",
            favorited: true
          },
          {
            name: "68. Al-Qalam ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_068.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_068.mp3",
            favorited: true
          },
          {
            name: "69. Al-Haaqqaa ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_069.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_069.mp3",
            favorited: false
          },
          {
            name: "70. Al-Maarij ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_070.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_070.mp3",
            favorited: false
          },
          // 71
          {
            name: "71. Nooh  ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_071.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_071.mp3",
            favorited: false
          },
          {
            name: "72.	Al-Jinn ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_072.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_072.mp3",
            favorited: true
          },
          {
            name: "73.	Al-Muzzammil ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_073.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_073.mp3",
            favorited: false
          },
          {
            name: "74.	Al-Muddaththir ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_074.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_074.mp3",
            favorited: false
          },
          {
            name: "75.	Al-Qiyama ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_075.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_075.mp3",
            favorited: false
          },
          {
            name: "76.	Al-Insan ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_076.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_076.mp3",
            favorited: false
          },
          {
            name: "77.	Al-Mursalat ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_077.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_077.mp3",
            favorited: false
          },
          {
            name: "78.	An-Naba ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_078.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_078.mp3",
            favorited: false
          },
          {
            name: "79.	An-Naziat ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_079.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_079.mp3",
            favorited: true
          },
          {
            name: "80.	Abasa ",
            artist: "Shaikh Mishari Rashid",
            cover: "https://makemythingz.com/cdn/shop/products/c1_20220911_12170617_1500x.jpg?v=1662879868",
            source: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_080.mp3",
            url: "https://www.jamiat.org.in/media/media/audio/tu_mr_s_080.mp3",
            favorited: true
          }
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });
  