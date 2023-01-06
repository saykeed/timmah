<template>
	<div class="landing w-full h-screen bg-no-repeat bg-left-bottom px-[15px] py-[40px] flex flex-col justify-between">
		<div class="w-full flex items-center justify-between">
			<img src="../assets/img/icon/logo.svg" alt="">
			<img src="../assets/img/icon/menu.svg" alt="">
		</div>

		<div class="h-[357px] pt-[22px] flex flex-col justify-between mb-[40px]">
			<button class="bg-white w-fit mx-auto rounded-[10px] p-2 flex items-center gap-[10px]">
				<img src="../assets/img/icon/green_ripple.svg" alt="">
				<span class="flex items-center gap-2 text-sm text-[#8F92A1]">Quick Banking
					<img src="../assets/img/icon/right_arrow.svg" alt="">
				</span>
			</button>

			<div class="flex flex-col gap-3">
				<button class="flex items-center justify-center gap-3 text-white font-bold text-base h-[56px] rounded-[10px] border-2 border-[#E87724]">
					<div class="flex items-center gap-3">
						<img src="../assets/img/icon/google_play.svg" alt="">
						<span>Google Play</span>
					</div>
				</button>

				<button class="flex items-center justify-center gap-3 text-white font-bold text-base h-[56px] rounded-[10px] border-2 border-[#E87724]">
					<div class="flex items-center gap-3">
						<img src="../assets/img/icon/apple_store.svg" alt="">
						<span>Apple store</span>
					</div>
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	div.landing{
		background-image: url('https://s3-alpha-sig.figma.com/img/4305/33bb/ea05537a2439458191f1429b07be872b?Expires=1673827200&Signature=dejGfoUb9Fe-9oTdTWKU0UVJfuZfZWEn~2M~O-qMnOUZvliwGfkjRYhRjzmX0nBpB862sRVIamkzORjsnWb95h8vRV7aWv4fus051-wTjtU92nj4jFXrlVB5FwVHhGSIhyFjgPu-QzVJclq2AgR0s8BQOzFHSI5oaVV2SrJcRqLA~zaNq8pwk7FNVo4O9ID38yCWU0k9pTPQbqT1dm~B2ArwPbOOB~G86p4aRhrJTaz~TzSF5~MdSgkZaMYed~xoeqxoZMsO566kAGY6dNknMpvWSedp9VlgRHdA4CE~lVP7CepG96nQtcgqNzc9V1SXwC1p-34wbFQdqXqyIcZxDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
	}
</style>