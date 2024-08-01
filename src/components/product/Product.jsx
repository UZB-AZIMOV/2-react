import React from 'react'

const deta=[
  {
    id:1,
    url:"https://s3-alpha-sig.figma.com/img/6744/d2d8/c81855b0aa1ec959b17a0c9dd084bf60?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iZTR~jsm6l1e0hvqX1yFicfr3VXaCFeG08GcKrr7nFTk6avNTzb0luYzMnjgk1Ju4ewW8I9uRd8ESWcbyi9ixpmGcJL0gXRirvCbx1V9xBKx7LivFOkNtDPvfSEWPf4QMAqCJPneXmYUHIWjzxUBGh7UPIg6rYl1Rd8O77spWcTKEsPexcrJ0JpqdH0myovlmIYLMEJshyWAYq7F-05t~2pKvDW~vHkE0CqjmMgS-4Gv1rVsnqcGQEYWH6O~EDj3Q63ZqisEGjzMqdG4LPqdS1vPijhAWDLYsN-VlnhCd4YtGYKPAs38ml68quosCqEYapJ4UpnWKVI7ZzuM7JHKEw__",
    title:"Spiced Mint",
    price:"31.1$",
  },

  {
    id:2,
    url:"https://s3-alpha-sig.figma.com/img/9753/f737/6f64c254aaac5b62795791f11064014d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ekEW12vICXhFBqc6Rv4y6V0NxlG4X8yUwylwHVC-Ilma~kvD0CSAY9CsCHlN5rT1PM7zvesedt~PnNeAl7m6WU33QYuh5pXaS-DzFSrxFUU~ZF2W--MoIZilhbj02Ut0e1sqcVGmDX2rfxLSX5fOxEUnVYABR45rGipqnPETs1DHvKHhZWX8UxOAtxfDM2ZRqLQjJuzTQLzplTHCLakzu2PEfzYaMTqp08WyakqWYYsrqwlyO680u8w9EjYhhXs0TUHwIH-Jx7l51cj5FhQzEMWjfZ2uQMskWLKdv0Fix2lNWo0~dyY42K-JcAK9ubxnFJ50CynHyw-EEjgoZCCjFA__",
    title:"Sweet Straweberry",
    price:"23.1$",
  }, {
    id:3,
    url:"https://s3-alpha-sig.figma.com/img/a9f1/56fa/ef864f7b08ad88072acb18956ed8b152?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJgnA5GiZUEDnX2nSRJrUiyfFSyAHJ6LAkgpjS8~E8SyWjluvdJolitHi~r5d~8GBeEqA2O-wEDcJogfc8vyAUgPSpHUSuCmYayZ6Eb4tDYrhQhQYNzpWL2wsnLyywmgEKcC0EIX6SvAM-2BfVJMiF9yAOSn~Vb8G19aDCc-xooSrbDXT-T5FHLsnVvqxgJNB3mjQDlx1rZkofM6F65USweVU-WZjTy5-6c~l05ghPg0B0zPJRLP~un1Wa3cFZZJdlhxA6~2i70pFcQyuYtg4JE1LBtiCblPNcGFHgzQhv3UYKbcpZfUHt7QEbkRi6giQJ0RcB5nojgAIGzEB4~qZw__",
    title:"Cool Blueberries",
    price:"15.9$",
  }, {
    id:4,
    url:"https://s3-alpha-sig.figma.com/img/f906/4c9b/1c7681c466d6d9f41e702cf309dcc79f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ItPYqhVgPSXMsn7zFIZyD4tFuJ6~w3BUZgTcZEGS75sw77LPHDdr5JxI0UPTjSr5woqi8AiQyn7mWd0FROG8AE1rKAAuz4pPZ6cN111FvyCLx1boJRWrLp586ltTNYbII-fNHUfSg~elUlVPzNwZyC5BXHWwV4EaaeaP6d7kkMwoFxuQ~wYfFUP4XIrCRf5oq8~TiE-QhTdw~gLgdaI8CvehH1qNJpI8Q2KfO2RtcLhjV2~XlYYvMf-lv7hFQfd5H6XlGkRNBT34Cj~AFt2rQapZGs6tZKLSo6jxMeiwTTK7lnVQW9a-gw6TpmWtWvfegdX5VVjzi2UcrthpLlMoAw__",
    title:"Juicy Lemon",
    price:"48.3$",
  }, 
  {
    id:5,
    url:"https://s3-alpha-sig.figma.com/img/dcb2/432b/ddac3e6f0b8ff6ff32c87932d21949f9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dczYt69T5ygNY6pCPx5vO3Bh8z7lQ2HgHmQLLd2fs9YXp8J3zjJvgmVduUNz4uulTzpZ1qXBJ6tJcHTXMqNe5Awib4yQIWbZiucvADNptqLRE2x7JdIqM30awZhMUhOm9KyoPAzluWeARyYk3kU9pTb90MAahr3WaU3dkwOwvo7hK3O2WQh9B6~1GU6LnYjrAe2xQCSkFXB82cYw09r~mOw0J1U9FFIkm-4a1QSN4GRQ9N24DU2LVKxF2E8y3OGCLzh6pOw1y9ICdlei0C8KmhBxhplxyF2vNreaH-8KAYpoag1bPvH25q8dGFyRjy9HX1LeHtReXXQ7IYq~pez4Qw__",
    title:"Product name",
    price:"5.51$",
  }, 
  {
    id:6,
    url:"https://s3-alpha-sig.figma.com/img/2ee8/44bd/8532ce3ba311fa81010d9d39ebae06b9?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc71iEB-mxWcXpA72uMkVLvaKsgtzYm1MZYzAHhiVMeMEAHcjcFK8YaNfaAl6ecYmUNv2RkOvG6N-NLyGKf-rPzUk02ge7EVwlkv6c8m-itHzepNdP6TGFoh7UA2AQk3IM5lcAjBdi0RgXzl1y9xseS6bqN5MK0AlFYalkVDvS5JLkavgoBOEiqsmswY2qTgh~TVHzACIXJBCmsMD6ywpefcHaxplzwIHWTsBDziZXKW9JInC~eIE7lIptRhAmKfcQBNCFJB6V1LF-hFGWFh8VSMXx4R-d--jjhKxBgbdU-oiNqliq4TFCbZ05GPUuRF9WVlvBZvTRjLbY1WOoG2OQ__",
    title:"Fragrant Cinnamon",
    price:"40.7$",
  },
   {
    id:7,
    url:"https://s3-alpha-sig.figma.com/img/afcc/79bf/7c1ea9541e5f8e50eef300c9a2fe49d1?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iMC1l7OB-ceCpSgT9cYKbUwGMu8fdQ74UuZy2DkVfxcY8gD9RO2oOG9DpXkAs3DPUh2xINm7ik~REK4GCR8lKlVasI~WJf6gqJu5IwIqtyRc3OVfV1ungcO4ksgY3zxMYOSkyAhSJUL-2yKDSHaMi4BFMNYLnLMajmJUDO2WLMGpGE5ODCbDdnViDGJctMuTIvDh7SP92YGj6bxqSPq~7eV4fbwJ1oRI5X9Hx78TwXqWv1N4ahRDhxZdGVx4i-h42AS9aDgK32UqJq72TuXMGrcTAk2iE-S0hSIYL0yoFLK5j0S7KzPOY8ECXTLo0Lyuk2b2YPtrAgNKQFYYDEipsQ__",
    title:"Summer Cherries",
    price:"31.5$",
  },
  {
    id:8,
    url:"https://s3-alpha-sig.figma.com/img/024e/de1e/13701879ed1c9befc9a6af6cb3d8613f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MFSsKzqOSQpYVQD6MsPBXbJwkoYZx8UUlyrS5WQJlgxgBXGdWtEGs7foPXX234OeEjN~FRbadRuBdUGHEMcVR2xvBjCPLepqYtBJJWGJk7jmzPqosOufQ50BBwqHCH9XYisV6Pz-444NTdUuC-hpupPXrn9d8VK84~L-U9TvQgx0M0ygWutIeUYXEAO8l0yOgwHlUAcTg3BrXqru7uPU8yow7DjKYkJBbp-wSzG2CejbqI1L65IYzvstUus7UVRHWFDjs6CuGMEyWozjP5KQrC97WjztD0wLKE8HJS1yGLiyUoREM-S43CxD1jmZDsog2-Y4OM52ahG3bhZRpRDfDA__",
    title:"Clean Lavander",
    price:"8.79$",
  },
]


function Product() {
  return (
    <div className='product'>
        <div className='container'>
            <p className='product__title'>Products</p>
            <p className='product__item'>Order it for you or for your beloved ones </p>
            <div className='product__wrapper'>
{
deta?.map((el)=>(
              <div key={el.id} className='product__card'>
              <img className='product__img' src={el.url} alt="foto"/>
              <p className='product__text'>{el.title}</p>
              <p className='product__price'>{el.price}</p>
            </div>
))
}
              </div>
        </div>
        
    </div>
  )
}

export default Product