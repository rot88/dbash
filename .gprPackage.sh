sed -i 's/\"dbash\"/\"@oocydo\/dbash\"/' package.json
sed -i '/  \"author\": \"oocydo\",/i \  \"publishConfig\": {\n    \"registry\": \"https:\/\/npm.pkg.github.com\/\"\n  },' package.json
