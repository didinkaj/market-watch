package com.jdidinya.marketwatch.service;

import com.jdidinya.marketwatch.util.AESCipher;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AESCipherService {
    public String encrypt(String plainText, String secretKey) throws Exception {
        return AESCipher.encrypt(plainText, secretKey);
    }

    public String decrypt(String encryptedText, String secretKey) throws Exception {
        return AESCipher.decrypt(encryptedText, secretKey);
    }
}
