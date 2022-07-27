import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-wrapper',
  templateUrl: './film-wrapper.component.html',
  styleUrls: ['./film-wrapper.component.css']
})
export class FilmWrapperComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    console.info(this.data[0].image);
    }
    data=[
      {id: Number(1),image:'https://occ-0-4609-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTo1CJXgxEAjecf19zJEo0MPGBhOtZDvs3aXnmQTPs9efeQBqLGMEvmMf4kbzgSp1qWKE52iOe4BzkzFQ7lok7dpeFSaAA31rqlr.webp?r=a3e'},
      {id: Number(2),image:'https://occ-0-4609-116.1.nflxso.net/dnm/api/v6/NYskjzLJzCNUfv50Bf8eKZdz4nA/AAAABRm1aoV22IVIojmLo2mpkT40QhRcxDjo12j90Y6R4Nin9jwxP9cj91YS06kU0U8j8AJyXAYFZQ4S88MP-3lgiLyWg5Qqyz8olZzE.jpg?r=3a8'},
      {id: Number(3),image:'https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWGXDHU3LZiW5kVrIFZChxoPgV0eR84Wsr1IRd2qItZ13iqLbYHhRiUMdFLjBQVIHptjJtFs-ia2H5viWnfhgrAnCERoCasAfh0i.webp?r=9f0'},
      {id: Number(4),image:'https://occ-0-4609-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQJIqCS4NPvYtmTuGnhEZ8oSm4Stl8flAAK9mstss8hidJseiMKR_1r2U_ufziGZByNLXy6AjJ9w9voETGwl3yC1LGcexOjUd-TdGe2w_4kRmhTe_NL6bmMJWgGS7yAukEE6imOF9dMG61UzCCmA_ZStB8Is9nt6kW2CYfo.jpg?r=f3e'},
      {id: Number(5),image:'https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaPYX3SN69_PLXfX51jB0T7NCr_6Bg05GB8akeHtpUqmjCl-H6GHzTWMH0sgOUhS09MD1i44He3gDsWh7ncBjM3_-XqQs-2Hp0NWYYj8TFLAZ4gx6lo1cKYBONFjvgfV0kqOdA.jpg?r=db7'},
      {id: Number(6),image:'https://occ-0-4609-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABenTg15HMFddwBP0O6srXuiZDN3GO2DTKq0qe3zr2U2un6hzkITK5t250W2xd9g9qaf7tjPhbyGriuimDPFWkyHhMqvEl2v0ohC2WNFNMOtqNf8TnADq9I6MgoihU5YiYN1Z2A.jpg?r=1e0'},
      {id: Number(7),image:'https://occ-0-4609-116.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbEpFsF--ilD_4l_GPlA_-xWPP1ZL1i7W0uPLY7McxKBOdKWtO3qpZBxGwZSroK0-FFksXyyJLawxs6TD0KuAnGRaJWCsrZjD3J7.webp?r=f52'},

      
  ];

}
