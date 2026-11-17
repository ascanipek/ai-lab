# AI Lab

### Etkileşimli Yapay Zekâ Öğrenme Laboratuvarı

**Yapay zekâyı yalnızca anlatmak değil, çalışırken görmek için.**

AI Lab; makine öğrenmesi, sinir ağları ve dil modellerinin temel kavramlarını tarayıcıda yapılan küçük deneylerle öğreten, Türkçe ve açık kaynak olarak paylaşılmaya uygun bir eğitim çalışmasıdır. Lise öğrencileri ve bu konuları sınıfta anlatmak isteyen öğretmenler için tasarlanmıştır.

![Yapay sinir ağı mimarisi](https://commons.wikimedia.org/wiki/Special:FilePath/Neural_network.svg?width=960)

*Bir yapay sinir ağının basitleştirilmiş görünümü. Görsel: Dake ve Mysid, Wikimedia Commons (kamu malı).*

---

## Proje hakkında

Bir model verilerden nasıl öğrenir? Aktivasyon fonksiyonları neden gereklidir? Hata nasıl azaltılır? Bir dil modeli bir sonraki tokenı nasıl seçer? Sentetik verilerle tekrar tekrar eğitim yapılması, modelin öğrendiği dağılımı nasıl etkileyebilir?

Bu soruları yalnızca tanımlarla değil; **kaydırıcılar, canlı grafikler, karşılaştırmalar ve kısa testlerle** ele alıyoruz. Her deneyin amacı bir formülü ezberletmekten önce, o formülün ne yaptığını görünür kılmak.

## Laboratuvarlar

| Sayfa | Konu | Öğrencinin deneyebileceği şey |
| :--- | :--- | :--- |
| [`index.html`](index.html) | Makine öğrenmesine giriş | Doğrusal regresyon, veri ve hata ilişkisi |
| [`aktivasyon.html`](aktivasyon.html) | Aktivasyon fonksiyonları | ReLU ve doğrusal olmayanlık |
| [`gradient_descent_backpropagation.html`](gradient_descent_backpropagation.html) | Gradient Descent ve Backpropagation | Öğrenme hızının ve güncellemelerin etkisi |
| [`softmax_crossentropy.html`](softmax_crossentropy.html) | Softmax ve Cross-Entropy | Logit, sıcaklık, olasılık ve kayıp |
| [`model_collapse_loss_softmax.html`](model_collapse_loss_softmax.html) | Kayıp fonksiyonları | MSE, MAE ve token tahmininde hata |
| [`attention_token_sampling.html`](attention_token_sampling.html) | Attention ve token seçimi | Bağlam, dikkat ağırlıkları ve sampling |
| [`model_collapse_entropi_perplexity.html`](model_collapse_entropi_perplexity.html) | Model Collapse | Entropi, perplexity ve nadir tokenlar |
| [`quiz.html`](quiz.html) | Bilgi testi | Konu bazlı veya karma sorular |
| [`gallery.html`](gallery.html) | Kaynak galerisi | İlgili video ve öğrenme kaynakları |

`style.css` ve `nav.js`, sayfaların ortak görünümünü ve gezinmesini sağlar.

## Öğrenme rotası

**01 — Temeli kurun.** `index.html` ile veri, model, tahmin ve hata kavramlarını inceleyin.

**02 — Ağın nasıl öğrendiğini görün.** Aktivasyon fonksiyonları, Gradient Descent ve Backpropagation deneylerini tamamlayın.

**03 — Dil modeline geçin.** Softmax, Cross-Entropy, Attention ve token seçimi arasındaki bağlantıyı kurun.

**04 — Araştırma sorusunu tartışın.** Model Collapse laboratuvarında sentetik veri, çeşitlilik kaybı, entropi ve perplexity ilişkisini gözlemleyin.

**05 — Kendinizi sınayın.** Bilgi testini çözün; yanlış cevapların açıklamalarını yeniden okuyun.

![Gradient Descent yöntemi için örnek görselleştirme](https://commons.wikimedia.org/wiki/Special:FilePath/Gradient_descent.svg?width=520)

*Gradient Descent: bir hata yüzeyinde daha düşük değerlere doğru ilerleme fikri. Görsel: Zerodamage, Wikimedia Commons (kamu malı).*

## Nasıl kullanılır?

Proje, temel deneyler için **HTML, CSS ve Vanilla JavaScript** kullanır. Python, Node.js, veritabanı veya sunucu kurulumu gerekmez.

1. GitHub üzerinden **Code → Download ZIP** seçeneğiyle dosyaları indirin.
2. ZIP dosyasını bir klasöre çıkarın.
3. `index.html` dosyasını güncel bir tarayıcıda açın.
4. Menüden laboratuvarları seçip deneylere başlayın.

Git bilenler depoyu klonlayarak da kullanabilir. Video galerisindeki harici içerikler için internet bağlantısı gerekebilir.

## Bir deney nasıl yapılmalı?

Her laboratuvarda aynı basit araştırma yaklaşımını kullanın:

1. **Tahmin:** Bir parametre değişirse ne olacağını önce düşünün.
2. **Deney:** Mümkünse yalnızca tek bir parametreyi değiştirin.
3. **Gözlem:** Grafik ve sayısal sonuçları karşılaştırın.
4. **Açıklama:** Değişimin nedenini kendi cümlelerinizle yazın.
5. **Tekrar:** Başka değerler deneyerek ilk yorumunuzu sınayın.

Örnek araştırma soruları:

- Öğrenme hızı çok yüksek olduğunda hata neden artabilir?
- Softmax sıcaklığı artırıldığında olasılık dağılımı nasıl değişir?
- Doğru tokena çok düşük olasılık verilmesi Cross-Entropy'yi nasıl etkiler?
- Nadir tokenların kaybı, bir dil modelinin ürettiği metinlerin çeşitliliğini nasıl etkileyebilir?
- Entropi ve perplexity, model davranışının hangi yönlerini gösterir; neleri tek başına kanıtlayamaz?

## Bilimsel kapsam

Bu laboratuvarlardaki örnekler **öğretim amaçlı basitleştirilmiş deneylerdir**. Özellikle Model Collapse bölümündeki nesil geçişleri, gerçek bir büyük dil modelinin yeniden eğitildiği deneylerin yerine geçmez. Görselleştirmeler kavramları anlamaya yardımcı olur; bilimsel bulgu veya gerçek model performansı olarak yorumlanmamalıdır.

## Katkıda bulunma

Öğrencilerin takıldığı bir açıklama, çalışmayan bir etkileşim veya yeni bir deney önerisi varsa GitHub üzerinden **Issue** açabilir ya da **Pull Request** gönderebilirsiniz. Anlaşılır Türkçe açıklamalar, erişilebilirlik ve bilimsel doğruluk önceliklidir.

## Görsel kaynakları

Bu README'deki görseller Wikimedia Commons üzerinden yüklenir; internet bağlantısı olmadan README'de görünmeyebilir. Laboratuvarların kendisi bu görsellere bağlı değildir.

- [Neural network.svg](https://commons.wikimedia.org/wiki/File:Neural_network.svg) — Dake ve Mysid; kamu malı.
- [Gradient descent.svg](https://commons.wikimedia.org/wiki/File:Gradient_descent.svg) — Zerodamage; kamu malı.

---

*AI Lab — Deneyle, gözlemle, sorgula.*
